import { Stack } from 'expo-router'
import React from 'react'

export default function LoginLayout() {
  return (
    <Stack>
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" />
    </Stack>
  )
}
