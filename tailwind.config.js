export default {
    theme: {
      extend: {
        animation: {
          'loop-scroll': 'loop-scroll 25s linear infinite',
          'loop-scroll-2':'loop-scroll 30s linear infinite'
        },
        keyframes: {
          'loop-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-103%)' },
          }
        }                    
      },
    },
    plugins: [require("@tailwindcss/typography")],
  }