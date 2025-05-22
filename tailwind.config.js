// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#DFDFF0",    // Lightest
          75: "#dfdff2",
          100: "#F0F2FA",   // Light
          200: "#010101",   // Effectively black
          300: "#4FB7DD",   // A cyan-ish blue
        },
        gray: { // Added a gray palette for prose text if blue-100 is too light
          200: '#E5E7EB', // Light gray
          300: '#D1D5DB', //
          400: '#9CA3AF',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#0c0c14', // Very dark gray / off-black for backgrounds
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",   // Darker yellow
          200: '#d4e044',   // Mid-yellow (newly added for headings potentially)
          300: "#edff66",   // Bright yellow
          400: '#f2ff8f',   // Lighter yellow (for hovers etc.)
        },
      },
      // Optional: Define custom typography styles for the 'prose' classes
      typography: ({ theme }) => ({
        DEFAULT: { // Styles for 'prose' without 'prose-invert'
          css: {
            '--tw-prose-body': theme('colors.gray.700'),
            '--tw-prose-headings': theme('colors.gray.900'),
            '--tw-prose-lead': theme('colors.gray.600'),
            '--tw-prose-links': theme('colors.violet.300'),
            '--tw-prose-bold': theme('colors.gray.900'),
            '--tw-prose-counters': theme('colors.gray.500'),
            '--tw-prose-bullets': theme('colors.gray.400'),
            '--tw-prose-hr': theme('colors.gray.200'),
            '--tw-prose-quotes': theme('colors.gray.900'),
            '--tw-prose-quote-borders': theme('colors.gray.200'),
            '--tw-prose-captions': theme('colors.gray.500'),
            '--tw-prose-code': theme('colors.gray.900'),
            '--tw-prose-pre-code': theme('colors.gray.200'),
            '--tw-prose-pre-bg': theme('colors.gray.800'),
            '--tw-prose-th-borders': theme('colors.gray.300'),
            '--tw-prose-td-borders': theme('colors.gray.200'),
          },
        },
        invert: { // Styles for 'prose prose-invert' (good for dark backgrounds)
          css: {
            '--tw-prose-body': theme('colors.blue[100] / 0.85'), // Slightly transparent light text
            '--tw-prose-headings': theme('colors.yellow[300]'),
            '--tw-prose-lead': theme('colors.blue[50] / 0.9'),
            '--tw-prose-links': theme('colors.yellow[300]'),
            '--tw-prose-bold': theme('colors.blue[50]'),
            '--tw-prose-counters': theme('colors.blue[50] / 0.7'),
            '--tw-prose-bullets': theme('colors.blue[50] / 0.5'),
            '--tw-prose-hr': theme('colors.blue[50] / 0.2'),
            '--tw-prose-quotes': theme('colors.blue[100]'),
            '--tw-prose-quote-borders': theme('colors.blue[50] / 0.3'),
            '--tw-prose-captions': theme('colors.blue[50] / 0.7'),
            '--tw-prose-code': theme('colors.blue[50]'),
            '--tw-prose-pre-code': theme('colors.blue[100]'),
            '--tw-prose-pre-bg': 'rgba(0, 0, 0, 0.3)', // Darker code block background
            '--tw-prose-th-borders': theme('colors.blue[50] / 0.2'),
            '--tw-prose-td-borders': theme('colors.blue[50] / 0.1'),
            // --- Customizing headings to use Zentry font with prose ---
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: theme('fontFamily.zentry'),
              color: theme('colors.yellow.300'), // Example: yellow headings for dark mode
            },
            'ul > li::marker': { // Customize bullet color for dark mode
                backgroundColor: theme('colors.yellow.300'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Add this line
  ],
};