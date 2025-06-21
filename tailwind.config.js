
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'brand-primary': '#1A5F7A', // A deep teal/blue
        'brand-secondary': '#57C5B6', // A lighter, vibrant teal
        'brand-accent': '#FFD700', // Gold for accents
        'brand-light': '#F8F9FA', // Off-white for backgrounds
        'brand-dark': '#002B5B', // Dark blue for text or dark themes
        'brand-text': '#343A40', // Dark grey for general text
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'strong': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      // Adding typography for prose styles if not already present
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.brand-text'),
            a: {
              color: theme('colors.brand-primary'),
              '&:hover': {
                color: theme('colors.brand-secondary'),
              },
            },
            // Add more prose styles as needed
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Add typography plugin
  ],
}
