// Remove unnecessary imports
// import { createContext, useContext } from 'react';
// import { useColorScheme } from 'react-native';

// Define light theme
export const lightTheme = {
  colors: {
    primary: '#007AFF',
    background: '#FFFFFF',
    card: '#FFFFFF',
    text: '#000000',
    border: '#E5E5E5',
    notification: '#FF3B30',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    h1: { fontSize: 32, fontWeight: 'bold' },
    h2: { fontSize: 24, fontWeight: 'bold' },
    body: { fontSize: 16 },
    caption: { fontSize: 14 },
  },
};

// Define dark theme
export const darkTheme = {
  ...lightTheme,
  colors: {
    primary: '#0A84FF',
    background: '#000000',
    card: '#1C1C1E',
    text: '#FFFFFF',
    border: '#38383A',
    notification: '#FF453A',
  },
};

// Remove ThemeContext definition from here
// const ThemeContext = createContext(lightTheme);

// Remove useTheme function from here
// export function useTheme() {
//   return useContext(ThemeContext);
// } 