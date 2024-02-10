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
      colors: {
        "default-blush": {
          light: '#f58ccc',
          DEFAULT: '#f58ccc',
          dark: '#f5b5dc',
        },
        "dark-pink-1": {
          light: '#f545b0',
          DEFAULT: '#f545b0',
          dark: '#f545b0',
        }

      },
      typography: {
        DEFAULT: {
          css: {
            bg: 'white',
            color: '#f58ccc',
            a: {
              color: '#f58ccc',
              '&:hover': {
                color: '#f5b5dc',
              },
            },
            h2: {
              color: '#f545b0',
            }
          },
        },
        invert: {
          css: {
            color: '#f5b5dc',
            a: {
              color: '#f58ccc',
              '&:hover': {
                color: '#f5b5dc',
              },
            },
            h2: {
              color: '#f545b0',
            }
          },
        },
        light: {
          css: {
            color: '#f58ccc',
            a: {
              color: '#f58ccc',
              '&:hover': {
                color: '#f5b5dc',
              },
            },
            h2: {
              color: '#f545b0',
            }
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
