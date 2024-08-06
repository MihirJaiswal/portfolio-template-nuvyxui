import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "bg1": "linear-gradient(to left bottom, #ffffff, #fcf8ff, #fbf1ff, #fce9ff, #ffe1ff);",
        "bg2": "linear-gradient(to right bottom, #171923, #171923, #171923, #171923, #171923);",
        "bg3": "linear-gradient(to right bottom, #17b2e8, #41a2ef, #748eeb, #a175d8, #c457b6, #cd4dac, #d542a1, #dc3594, #d942aa, #d350bf, #c95ed4, #bb6ce8);",
        "bg4": "linear-gradient(to right bottom, #0e1c46, #131a47, #191947, #1e1647, #231447, #2a1244, #2f0f41, #340c3e, #390a38, #3c0932, #3e0a2c, #3f0c27);",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)', width: '100%' },
          '25%': { transform: 'scale(1.1)', width: '90%' },
          '50%': { transform: 'scale(1)', width: '100%' },
          '75%': { transform: 'scale(1.06)', width: '95%' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        heartbeat: 'heartbeat 0.8s ease-in-out',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config