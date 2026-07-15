const spacing = {
  unit: 24,
};

const colors = {
  navy: '#2c3a81',
  teal: '#1dd2cf',
  navyTint: '#e9eefa',
  navyTintLighter: '#f5f7f9',
  black: '#222',
  grey: '#888',
  lighterGrey: '#f5f5f5',
};

const base = {
  lineDrop: `${spacing.unit}px`,
  halfLineDrop: `${spacing.unit / 2}px`,
  fontFamilySerif: 'Georgia, serif',
  fontFamilySans: 'Arial, Helvetica, sans-serif',
  layout: {
    fullWidth: 600,
    liveAreaWidth: 528,
  },
  colors: {
    headline: colors.navy,
    text: colors.black,
    link: colors.navy,
    background: colors.navyTint,
    primary: colors.navy,
    secondary: colors.teal,
    accent: colors.teal,
    grey: colors.grey,
    lightGrey: colors.lightGrey,
    lighterGrey: colors.lighterGrey,
  },
};

export default {
  P_STYLE: ['margin: 0 0 0 0'],

  H1_STYLE: [
    `margin-bottom: ${base.halfLineDrop}`,
    'margin-top: 0',
    `font-family: ${base.fontFamilySerif}`,
    'font-size: 20px',
    'font-weight: bold',
    'line-height: 28px',
    'text-align: center',
    `color: ${base.colors.headline}`,
  ],

  H2_STYLE: [
    `margin-bottom: ${base.halfLineDrop}`,
    'margin-top: 0',
    `font-family: ${base.fontFamilySans}`,
    'font-size: 18px',
    'font-weight: normal',
    'text-align: center',
    'line-height: 24px',
    `color: ${base.colors.text}`,
  ],

  H3_STYLE: [
    'margin-bottom: 0px',
    'margin-top: 0',
    `font-family: ${base.fontFamilySans}`,
    'font-size: 20px',
    'font-weight: bold',
    'line-height: 28px',
    'text-align: left',
  ],

  H4_STYLE: [
    'margin-bottom: 0px',
    'margin-top: 0',
    `font-family: ${base.fontFamilySans}`,
    'font-size: 18px',
    'font-weight: bold',
    'line-height: 24px',
    'text-align: left',
  ],

  H5_STYLE: [
    'margin-bottom: 0px',
    'margin-top: 0',
    `font-family: ${base.fontFamilySans}`,
    'font-size: 16px',
    'font-weight: bold',
    'line-height: 24px',
    'text-align: left',
  ],

  LINK_STYLE: [
    `color: ${base.colors.link}`,
    'font-weight: bold',
    'text-decoration: underline',
  ],
};
