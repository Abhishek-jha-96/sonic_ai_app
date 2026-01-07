import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import "react-native-reanimated";

import * as WebBrowser from "expo-web-browser";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@/utils/clerkTokenCache";
import { AuthGate } from "./AuthGate";

WebBrowser.maybeCompleteAuthSession();

export default function RootLayout() {
  return (
    <Provider store={store}>
      <ThemeProvider value={DarkTheme}>
        <ClerkProvider
          publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
          tokenCache={tokenCache}
        >
          <AuthGate />
        </ClerkProvider>
      </ThemeProvider>
    </Provider>
  );
}
