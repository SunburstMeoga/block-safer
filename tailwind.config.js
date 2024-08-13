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
        "gradient-wallet-explore": "linear-gradient(180deg, rgba(21,23,32,1) 0%, rgba(62,63,67,1) 54%);",
        "gradient-wallet-word": "linear-gradient(90deg, rgba(122,123,131,1) 0%, rgba(217,219,233,1) 49%, rgba(122,123,131,0.35) 100%);",
        "home-module-download": "url('/public/images/phone/home-module-download.png')",
        "pad-home-module-download": "url('/public/images/pad/home-module-download.png')",
        "home-module-choose": "url('/public/images/phone/home-module-choose.png')",
        "pad-home-module-choose": "url('/public/images/pad/home-module-choose.png')",
        "pc-home-module-choose": "url('/public/images/pc/home-module-choose.png')",
        "wallet-module-explore": "url('/public/images/phone/wallet-module-explore.png')",
        "pc-wallet-module-explore": "url('/public/images/pc/wallet-module-explore.png')",

        "wallet-module-explore-small": "url('/public/images/phone/wallet-module-explore-small.png')",

        "support-module-info": "url('/public/images/phone/support-module-info.png')",
        "pad-support-module-info": "url('/public/images/pad/support-module-info.png')",


        "support-module-team": "url('/public/images/phone/support-module-team.png')",
        "pad-support-module-team": "url('/public/images/pad/support-module-team.png')",


        "support-module-vision": "url('/public/images/phone/support-module-vision.png')",
        "pad-support-module-vision": "url('/public/images/pad/support-module-vision.png')",



        "home-module-advantage": "url('/public/images/phone/home-module-advantage.png')",
        "pad-home-module-advantage": "url('/public/images/pad/home-module-advantage.png')",
        "pc-home-module-advantage": "url('/public/images/pc/home-module-advantage.png')",

        "home-download-button": "url('/public/images/phone/home-download-button.png')",
        "pad-home-download-button": "url('/public/images/pad/home-download-button.png')",
        "pc-home-download-button": "url('/public/images/pc/home-download-button.png')",

        "home-choose-banner": "url('/public/images/phone/home-choose-banner.png')"
      },
      colors: {
        'primary-yellow': '#F9D54A',
        'card-white': '#F4F4FD',

        'gray-menu': '#242424',
        'download-card': '#513F33',
        'card-line': 'rgb(102,73,54)',

        'module-title': '#CE956E',
        'menu-bar': "#020202",
        'menu-icon': "#FFCFAB",
        'footer-logo': "#9D9D9C",
        'footer-word': "#F9B292",
        'currency-items': "#414248",
        'support-title': "#392821",
        'primary-yellow10': 'rgba(201,201,224,.1)',
        'title-word': '#222222',
        'version-title': '#383330'
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
