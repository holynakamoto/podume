import React, { createContext, useContext } from 'react'
import { useColorScheme } from 'react-native'

// Define the theme structure
type ThemeColors = {
  primary: string
  background: string
  card: string
  text: string
  border: string
  notification: string
}

type Theme = {
  colors: ThemeColors
  spacing: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
  }
  typography: {
    h1: { fontSize: number; fontWeight: string }
    h2: { fontSize: number; fontWeight: string }
    body: { fontSize: number }
    caption: { fontSize: number }
  }
}

// Define light theme
export const lightTheme: Theme = {
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
} as const

// Define dark theme
export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    primary: '#0A84FF',
    background: '#000000',
    card: '#1C1C1E',
    text: '#FFFFFF',
    border: '#38383A',
    notification: '#FF453A',
  },
} as const

// Create the ThemeContext
const ThemeContext = createContext<Theme>(lightTheme)

// ThemeProvider component
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

// Custom hook to use the theme
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}