module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: { extend: {
      fontSize: {
        'clamp-7xl': 'clamp(2.5rem, 7vw, 4.5rem)',
        'clamp-6xl': 'clamp(2.25rem, 6vw, 3.75rem)',
        'clamp-5xl': 'clamp(2rem, 4.8vw, 3rem)',
        'clamp-4xl': 'clamp(1.8rem, 3.6vw, 2.25rem)',
        'clamp-3xl': 'clamp(1.6rem, 3vw, 1.875rem)',
        'clamp-2xl': 'clamp(1.4rem, 2.5vw, 1.5rem)',
        'clamp-xl': 'clamp(1.125rem, 2vw, 1.25rem)',
        'clamp-lg': 'clamp(1rem, 1.8vw, 1.125rem)',
        'clamp-md': 'clamp(0.875rem, 1.7vw, 1.125rem)',
        'clamp-sm': 'clamp(0.75rem, 1.4vw, 1rem)',
      },
      colors: {
          background: '#f8f9f0',
          primary: '#163e3a',
      },
  } },
  plugins: [],
}
