/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'heebo': ["Heebo", "Padauk"],
        'nunito': ["Nunito", "Padauk"],
      },
      colors: {
        'primary': "#0bbbcc",
        'primary-hover': "#2BCAE0",
        'secondary': "#F0FBFC",
        'text-color': "#181D38",
        'text-color-2': "#52565b",
        'background-img-color': 'rgba(24, 29, 56, .7)',
      },
      keyframes: {
        fadeInDown: {
          'from': {
            transform: 'rotateX(-75deg)',
            opacity: '0'
          },
          'to': {
            transform: 'rotateX(0deg)',
            opacity: '1'
          }
        },

        fadeUpDown: {
          'from': {
            transform: 'rotateX(0deg)',
            opacity: '1'
          }, 
          'to': {
            transform: 'rotateX(-75deg)',
            opacity: '0'
          }
        },

        slideInDown: {
          'from': {
            transform: 'translateY(-100%)',
            opacity: '0'
          },
          'to': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },

        slideInLeft: {
          'from': {
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          'to': {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },

        slideInRight: {
          'from': {
            transform: 'translateX(100%)',
            opacity: '0'
          },
          'to': {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },

        slideInUp: {
          'from': {
            transform: 'translateY(100%)',
            opacity: '0'
          },
          'to': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },

        zoomIn: {
          '0%': {
            transform: 'scale(.3)',
            opacity: '0'
          },
          '50%': {
            opacity: '1'
          }
        },

        fadeIn: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        }
      },
      animation: {
        fadeInDown: "fadeInDown .3s ease-in",
        fadeUpDown: "fadeUpDown .5s ease-in",
        slideInDown: "slideInDown 1s ease-in",
        slideInLeft: "slideInLeft 1s ease-in",
        slideInRight: "slideInRight 1s ease-in",
        zoomIn: "zoomIn .3s ease-in",
        fadeIn: "fadeIn .5s ease-in"
      }
    },
  },
  plugins: [],
}

