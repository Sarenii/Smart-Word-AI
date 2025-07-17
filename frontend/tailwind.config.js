/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable dark mode using a class strategy.
  darkMode: 'class',
  
  // Configure the paths to all of your template files.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      // We extend the default color palette here.
      colors: {
        // Add the custom LinkedIn blue color.
        // Now we can use classes like `text-linkedin-blue`.
        'linkedin-blue': '#0A66C2',
      },
    },
  },
  plugins: [],
}
