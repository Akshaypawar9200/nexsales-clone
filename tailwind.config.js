/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sharecomponent/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors:{
        'neutralBlue':'var(--Primary-Navy-Blue-500, #232B7A)',
        'tableHead':'var(--Neutral-Gray-50, #F9FAFB);',
        'border-bottom':'1px solid var(--Neutral-Gray-200, #EAECF0);',
        'tableHeading':' var(--Neutral-Gray-500, #667085);',
        'tableData': 'var(--Neutral-Gray-900, #101828);',
        'box-shadow': '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10);'
      },
      backgroundImage: {

        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
