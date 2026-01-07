import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import "react-native-reanimated";

import * as WebBrowser from "expo-web-browser";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { tokenCache } from "@/utils/clerkTokenCache";
import { ClerkReduxSync } from "./auth/clerkReduxSync";

WebBrowser.maybeCompleteAuthSession();

export default function RootLayout() {
  return (
    <Provider store={store}>
      <ThemeProvider value={DarkTheme}>
        <ClerkProvider
          publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
          tokenCache={tokenCache}
        >
          <Stack>
            <SignedIn>
              <ClerkReduxSync />
              <Stack.Screen name="home" options={{ headerShown: false }} />
            </SignedIn>
            <SignedOut>
              <Stack.Screen name="auth" options={{ headerShown: false }} />
            </SignedOut>
          </Stack>
        </ClerkProvider>
      </ThemeProvider>
    </Provider>
  );
}
