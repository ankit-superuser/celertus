import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const FinalCTA = () => (
  <section
    className="relative overflow-hidden bg-studio-ink px-4 py-20 sm:px-6 sm:py-28"
    style={{
      backgroundImage:
        "radial-gradient(60% 70% at 20% 15%, rgba(255,106,69,0.16), transparent 65%), radial-gradient(55% 65% at 85% 85%, rgba(0,207,193,0.14), transparent 65%), radial-gradient(70% 80% at 50% 50%, rgba(91,91,245,0.12), transparent 70%)",
    }}
  >
    <div className="relative mx-auto max-w-[860px] text-center">
      <Reveal variant="fade">
        <h2 className="mb-5 text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.03em] text-studio-cloud">
          Tell us what you are trying to grow.
        </h2>
        <p className="mx-auto mb-9 max-w-[52ch] text-[17px] leading-[1.65] text-studio-mutedDark">
          We will tell you honestly whether it is a marketing problem, a product problem, or both. No deck, no
          retainer pitch &mdash; just a conversation.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-studio-cloud px-7 py-3.5 font-semibold text-studio-ink transition-colors hover:bg-white"
          >
            Start a conversation <span aria-hidden="true">&rarr;</span>
          </Link>
          <a
            href="mailto:celertustechnologies@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/[.22] px-7 py-3.5 font-medium text-studio-cloud transition-colors hover:border-white/40"
          >
            celertustechnologies@gmail.com
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default FinalCTA;
