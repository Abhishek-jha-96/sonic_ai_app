import { Stack, router } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { useEffect, useState } from "react";

export function AuthGate() {
  const { isLoaded, isSignedIn } = useAuth();
  const [splashDone, setSplashDone] = useState(false);

  // splash timer
  useEffect(() => {
    const t = setTimeout(() => setSplashDone(true), 2200);
    return () => clearTimeout(t);
  }, []);

  // route decision
  useEffect(() => {
    if (!isLoaded || !splashDone) return;

    if (isSignedIn) {
      router.replace("/home");
    } else {
      router.replace("/auth");
    }
  }, [isLoaded, splashDone, isSignedIn]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Start screen always mounted first */}
      <Stack.Screen name="index" />

      {/* Actual routes */}
      <Stack.Screen name="home" />
      <Stack.Screen name="auth" />
    </Stack>
  );
}
