import { useEffect, useRef, useState } from "react";
import {
  Scene,
  OrthographicCamera,
  WebGLRenderer,
  PlaneGeometry,
  Mesh,
  ShaderMaterial,
  Vector2,
  Vector3,
} from "three";

/**
 * SilkBackground — a slow, liquid gradient that drifts behind the hero.
 *
 * A single full-screen quad running domain-warped fbm noise. It reads as
 * flowing silk rather than a "graphic" because the motion is deliberately slow
 * (speed ~0.15) and the palette stays close to the page background, with the
 * brand violet and terracotta washing through at low intensity.
 *
 * Follows the three.js scaffolding conventions already used by FloatingLines:
 * orthographic camera, PlaneGeometry(2,2), ShaderMaterial, explicit dispose().
 *
 * Degrades safely:
 *  - no WebGL            → static CSS gradient fallback
 *  - reduced motion      → renders exactly one frame, no RAF loop
 *  - scrolled off screen → RAF loop pauses (IntersectionObserver)
 */

const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;

  varying vec2 vUv;

  uniform float uTime;
  uniform vec2  uResolution;
  uniform vec2  uMouse;
  uniform vec3  uBase;
  uniform vec3  uColorA;
  uniform vec3  uColorB;
  uniform float uIntensity;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = p * 2.02 + 17.3;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;

    // Aspect-correct so the flow never stretches on wide screens.
    vec2 p = uv;
    p.x *= uResolution.x / max(uResolution.y, 1.0);

    float t = uTime * 0.15;
    vec2 mouseOff = (uMouse - 0.5) * 0.35;

    // Two rounds of domain warping — this is what gives the folded, silky look.
    vec2 q = vec2(
      fbm(p * 1.6 + t * 0.30),
      fbm(p * 1.6 + vec2(5.2, 1.3) + t * 0.24)
    );
    vec2 r = vec2(
      fbm(p * 1.6 + 3.0 * q + vec2(1.7, 9.2) + t * 0.18 + mouseOff),
      fbm(p * 1.6 + 3.0 * q + vec2(8.3, 2.8) + t * 0.15 + mouseOff)
    );
    float f = fbm(p * 1.6 + 3.0 * r);

    vec3 col = uBase;
    col = mix(col, uColorA, smoothstep(0.15, 0.95, f) * uIntensity);
    col = mix(col, uColorB, smoothstep(0.25, 0.85, r.x) * uIntensity * 0.75);

    // A soft specular ribbon along the fold lines.
    float ribbon = smoothstep(0.42, 0.50, f) - smoothstep(0.50, 0.58, f);
    col += ribbon * 0.06;

    // Fall back to the page colour toward the edges so headline text stays readable.
    float vignette = smoothstep(1.05, 0.25, length(uv - 0.5) * 1.4);
    col = mix(uBase, col, vignette);

    // Dither to kill banding across these very low-contrast ramps.
    col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;

    gl_FragColor = vec4(col, 1.0);
  }
`;

const hexToVec3 = (hex: string): Vector3 => {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  return new Vector3(
    ((n >> 16) & 255) / 255,
    ((n >> 8) & 255) / 255,
    (n & 255) / 255
  );
};

export interface SilkBackgroundProps {
  className?: string;
  /** Page background the silk settles back into at the edges. */
  base?: string;
  /** Primary wash. */
  colorA?: string;
  /** Secondary wash. */
  colorB?: string;
  /** 0–1. How strongly the washes read against the base. */
  intensity?: number;
  /** Follow the pointer. */
  interactive?: boolean;
}

const SilkBackground = ({
  className = "",
  base = "#FAF8F5",
  colorA = "#6D5AE6",
  colorB = "#E8A87C",
  intensity = 0.55,
  interactive = true,
}: SilkBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new Scene();
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    camera.position.z = 1;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let renderer: WebGLRenderer | null = null;
    try {
      renderer = new WebGLRenderer({ antialias: false, alpha: false, powerPreference: "low-power" });
    } catch {
      setFailed(true);
      return;
    }
    if (!renderer) {
      setFailed(true);
      return;
    }

    renderer.setPixelRatio(dpr);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new Vector2(1, 1) },
      uMouse: { value: new Vector2(0.5, 0.5) },
      uBase: { value: hexToVec3(base) },
      uColorA: { value: hexToVec3(colorA) },
      uColorB: { value: hexToVec3(colorB) },
      uIntensity: { value: intensity },
    };

    const geometry = new PlaneGeometry(2, 2);
    const material = new ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms,
      depthTest: false,
      depthWrite: false,
    });
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);

    const setSize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      renderer?.setSize(w, h, false);
      uniforms.uResolution.value.set(w, h);
    };
    setSize();

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(setSize) : null;
    ro?.observe(container);
    if (!ro) window.addEventListener("resize", setSize);

    // Pointer target; the uniform lerps toward it so the flow drifts, never snaps.
    const target = new Vector2(0.5, 0.5);
    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      target.set(
        (e.clientX - rect.left) / Math.max(rect.width, 1),
        1 - (e.clientY - rect.top) / Math.max(rect.height, 1)
      );
    };
    if (interactive && !reduced) window.addEventListener("pointermove", onPointerMove, { passive: true });

    let raf = 0;
    let visible = true;
    let last = performance.now();

    const renderLoop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      uniforms.uTime.value += dt;
      uniforms.uMouse.value.lerp(target, 0.03);
      renderer?.render(scene, camera);
      raf = requestAnimationFrame(renderLoop);
    };

    if (reduced) {
      // One static frame, offset so it isn't a flat wash.
      uniforms.uTime.value = 12;
      renderer.render(scene, camera);
    } else {
      raf = requestAnimationFrame(renderLoop);
    }

    // Stop burning GPU once the hero scrolls away.
    const io =
      typeof IntersectionObserver !== "undefined" && !reduced
        ? new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting && !visible) {
                visible = true;
                last = performance.now();
                raf = requestAnimationFrame(renderLoop);
              } else if (!entry.isIntersecting && visible) {
                visible = false;
                cancelAnimationFrame(raf);
              }
            },
            { threshold: 0 }
          )
        : null;
    io?.observe(container);

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
      ro?.disconnect();
      if (!ro) window.removeEventListener("resize", setSize);
      window.removeEventListener("pointermove", onPointerMove);
      geometry.dispose();
      material.dispose();
      renderer?.dispose();
      if (renderer?.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [base, colorA, colorB, intensity, interactive]);

  if (failed) {
    return (
      <div
        aria-hidden="true"
        className={className}
        style={{
          background: `radial-gradient(60% 60% at 30% 30%, ${colorA}22, transparent 70%),
                       radial-gradient(55% 55% at 75% 60%, ${colorB}22, transparent 70%),
                       ${base}`,
        }}
      />
    );
  }

  return <div ref={containerRef} aria-hidden="true" className={className} />;
};

export default SilkBackground;
