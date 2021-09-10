const baseFontSize = 1.15
const scaleBaseFont = (scale) => baseFontSize * scale + 'rem'

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  
  theme: {
    // font
    fontFamily: {
      sans: ['IBM Plex Sans Arabic', 'sans-serif'],
      serif: ['Vollkorn', 'serif']
    },
    fontSize: {
      '0.5x': scaleBaseFont(.5),
      base: scaleBaseFont(1),
      '2x': scaleBaseFont(2),
      '4x': scaleBaseFont(4),
      '8x': scaleBaseFont(8),
    },
  },
};
