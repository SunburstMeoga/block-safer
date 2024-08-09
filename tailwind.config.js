/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    spacing: Array.from({ length: 1000 }).reduce((map, _, index) => {
      const value = ((index + 1) / 10).toFixed(1);
      const [integerPart, decimalPart] = value.split('.');
      const key = `${integerPart}-${decimalPart}`;
      const formattedValue = `${integerPart}.${decimalPart}`;
      map[key] = `${formattedValue}rem`;
      return map;
    }, {}),
    extend: {
      backgroundImage: {
        "gradient-home-title": "linear-gradient(90deg, rgba(206,149,110,0.11) 0%, rgba(206,149,110,1) 54%, rgba(206,149,110,0) 100%)",
        "home-module-download": "url('/public/images/phone/home-module-download.png')",
        "home-module-choose": "url('/public/images/phone/home-module-choose.png')",
        "home-module-advantage": "url('/public/images/phone/home-module-advantage.png')",
        "home-download-button": "url('/public/images/phone/home-download-button.png')",
        "home-choose-banner": "url('/public/images/phone/home-choose-banner.png')"
      },
      colors: {
        'primary-yellow': '#F9D54A',
        'card-white': '#F4F4FD',
        'title-word': '#222222',
        'gray-menu': '#242424',
        'download-card': '#513F33',
        'card-line': 'rgb(102,73,54)',

        'module-title': '#CE956E',
        'menu-bar': "#020202",
        'menu-icon': "#FFCFAB",
        'footer-logo': "#9D9D9C",
        'footer-word': "#F9B292"
      },
      fontSize: ({ theme }) => ({
        ...theme("spacing"),
      }),
      lineHeight: ({ theme }) => ({
        ...theme("spacing"),
      }),
    },
  },
  plugins: [],
}
