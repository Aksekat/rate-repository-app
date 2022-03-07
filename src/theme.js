import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textBright: '#f0f8ff',
    primary: '#0366d6',
    mainBackground: '#e1e4e8',
    appBarBackground: '#24292e',
    appBarText: '#f0f8ff',
    error: '#d73a4a'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 18,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;