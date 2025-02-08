import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from '../styles/theme'
import { AuthProvider, useAuth } from '../context/auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Slot, useRouter, useSegments } from 'expo-router'
import { useEffect } from 'react'
import { View, Text } from 'react-native'

const queryClient = new QueryClient()

function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth()
  const segments = useSegments()
  const router = useRouter()

  useEffect(() => {
    if (isLoading) return

    const inAuthGroup = segments[0] === '(auth)'

    if (!user && !inAuthGroup) {
      // Redirect to login if not authenticated
      router.replace('/(auth)/login')
    } else if (user && inAuthGroup) {
      // Redirect to home if authenticated
      router.replace('/(main)/home')
    }
  }, [user, segments, isLoading])

  return <>{children}</>
}

const Layout = ({ children }) => {
  return (
    <View>
      <Text>Layout Component</Text>
      {children}
    </View>
  )
}

export default Layout
