
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",


  ],
  
  theme: {
    fontFamily:{
      body:['Rubik']
    },
    extend: {
      colors:{
        'primary-white':'#f3f4f6',
        'btn-blue':'#1e40afe6',

      }
    },
  },
   plugins: [
        require('flowbite/plugin')
    ],
}