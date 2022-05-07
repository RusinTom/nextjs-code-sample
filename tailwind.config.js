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
        dark: '#222222',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
