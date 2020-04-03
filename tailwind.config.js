module.exports = {
  theme: {
    colors: {},
    textColor: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      content: 'var(--color-text-content)',
      contrast: 'var(--color-text-contrast)',
      solid: 'var(--color-text-solid)',
      'gradient-from': 'var(--color-text-gradient-from)',
      'gradient-to': 'var(--color-text-gradient-to)',
      accent: 'var(--color-text-accent)',
      'accent-soft': 'var(--color-text-accent-soft)',
    },
    backgroundColor: {
      bg: 'var(--color-bg-bg)',
      primary: 'var(--color-bg-primary)',
      secondary: 'var(--color-bg-secondary)',
      'almost-primary': 'var(--color-bg-almost-primary)',
      light: 'var(--color-bg-light)',
      hover: 'var(--color-bg-hover)',
      shadow: 'var(--color-bg-shadow)',
      'light-bar': 'var(--color-bg-light-bar)',
      'shadow-heavy': 'var(--color-bg-shadow-heavy)',
    },
    fontFamily: {
      display: 'var(--font-display)',
      body: 'var(--font-body)',
    },
    fontWeights: {
      normal: 'var(--font-weight-normal)',
      display: 'var(--font-weight-display)',
      btn: 'var(--font-weight-btn)',
    },
    borderRadius: {
      none: '0',
      btn: 'var(--rounded-btn)',
    },
    inset: {
      20: '20px',
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      primary: 'var(--color-border-primary)',
      secondary: 'var(--color-border-secondary)',
    }),
  },
  variants: {},
  plugins: [],
};
