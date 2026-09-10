import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
				heading: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
				/* Reserved for genuine code / tabular readouts only. */
				mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
			},
			boxShadow: {
				/* Soft ambient elevation — replaces the old neon offset shadows. */
				'soft': '0 1px 2px rgb(22 21 26 / .04), 0 12px 32px -8px rgb(22 21 26 / .10)',
				'soft-lg': '0 2px 4px rgb(22 21 26 / .04), 0 24px 56px -12px rgb(22 21 26 / .14)',
				'soft-inset': 'inset 0 1px 0 0 rgb(255 255 255 / .6)',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
				'gradient-secondary': 'linear-gradient(120deg, hsl(var(--primary) / 0.12) 0%, hsl(var(--accent) / 0.16) 100%)',
				'gradient-card': 'linear-gradient(160deg, hsl(var(--card)) 0%, hsl(var(--secondary) / 0.6) 100%)',
				'gradient-hero': 'linear-gradient(180deg, transparent 0%, hsl(var(--background) / 0.25) 60%, hsl(var(--background) / 0.7) 100%)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				shine: {
					'0%': { backgroundPosition: '100%' },
					'100%': { backgroundPosition: '-100%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				shine: 'shine 5s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
