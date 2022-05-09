const withOpacityValue = (variable) => {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
};

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Manrope', 'sans-serif'],
      },
      colors: {
        black: withOpacityValue('--black'),
        red: withOpacityValue('--red'),
        iconWhite: withOpacityValue('--icon-white'),
        whiteText: withOpacityValue('--white-text'),
        white: withOpacityValue('--white'),
        grayPlaceholder: withOpacityValue('--gray-placeholder'),
        gray: withOpacityValue('--gray'),
        grayBg: 'var(--gray-bg)',
        searchBarBg: withOpacityValue('--search-bar-bg'),
      },
      container: {
        center: true,
        padding: '15px',
        screens: {
          xl: '1231px',
          lg: '1024px',
          md: '768px',
          sm: '640px',
        },
      },
    },
    screens: {
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xsm: { max: '400px' },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
