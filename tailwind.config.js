module.exports = {

  purge: ['./app/**/*.html.erb', './app/helpers/**/*.rb', './app/javascript/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  
  content: [
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*'
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: { // custom color palette for branding
        'primary': 'rgb(79, 70, 229)',
        'primary-hover': {
          '700': '#a4411c',
          '500': '#EA9A72'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('flowbite/plugin')
  ]
}
