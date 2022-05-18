import { NbJSThemeOptions } from '@nebular/theme';

const palette = {
  primary: '#6200ee',
  success: '#60af20',
  info: '#0495ee',
  warning: '#ff9f05',
  danger: '#b00020',
};

export const baseTheme: NbJSThemeOptions = {
  name: 'material-light',
  base: 'default',
  variables: {
    fontMain: 'Roboto, sans-serif',
    fontSecondary: 'Roboto, sans-serif',

    bg: '#ffffff',
    bg2: '#f5f5f5',
    bg3: '#ebebeb',
    bg4: '#e0e0e0',

    border: '#ffffff',
    border2: '#f5f5f5',
    border3: '#ebebeb',
    border4: '#e0e0e0',
    border5: '#b3b3b3',

    fg: '#838383',
    fgHeading: '#1a2138',
    fgText: '#1a2138',
    fgHighlight: palette.primary,
    layoutBg: '#ebebeb',
    separator: '#ebebeb',

    primary: palette.primary,
    success: palette.success,
    info: palette.info,
    warning: palette.warning,
    danger: palette.danger,

    primaryLight: '#903df4',
    successLight: '#8fcf50',
    infoLight: '#40bbf4',
    warningLight: '#ffbe43',
    dangerLight: '#cf3341',
  },
};

export const MATERIAL_LIGHT_THEME = baseTheme as NbJSThemeOptions;
