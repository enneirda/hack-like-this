import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#ffdef2',
            a: {
              color: '#ffdef2',
              '&:hover': {
                color: '#fbc9e8',
              },
            },
          },
        },
      },
      animation: {
        blink: 'typewriter 2s steps(14) forwards, blink 1s steps(14) infinite',
        typewriter: "typewriter 2s steps(14) forwards"
      },
      keyframes: {
        blink: {
          '0%': {
            'opacity': '0',
          },
          '50%': {
            'opacity': '1',
          },
        },
        typewriter: {
          to: {
            left: "100%"
          }
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
export default config;
