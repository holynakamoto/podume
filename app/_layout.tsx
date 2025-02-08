import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from '../styles/theme'
import { AuthProvider, useAuth } from '../context/auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Slot, useRouter, useSegments } from 'expo-router'
import { useEffect } from 'react'

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

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider>
          <AuthProvider>
            <AuthGuard>
              <Slot />
            </AuthGuard>
          </AuthProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}
