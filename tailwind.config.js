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
      colors: {
        'primary-yellow': '#F9D54A',
        'card-white': '#F1F1FC',
        'title-word': '#222222',
        'gray-menu': '#242424',
        'download-card': '#513F33',
        'card-line': 'rgb(102,73,54)'
      },
      fontSize: ({ theme }) => ({
        ...theme("spacing"),
      }),
    },
  },
  plugins: [],
}