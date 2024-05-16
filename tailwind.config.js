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
        'primary-yellow': '#F9D54A'
      },
      fontSize: ({ theme }) => ({
        ...theme("spacing"),
      }),
    },
  },
  plugins: [],
}