import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

import { Provider } from 'react-redux';
import { store } from '@/store/store';

export default function RootLayout() {

  return (
    <Provider store={store}>
    <ThemeProvider value={DarkTheme}>
      <Stack>
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
    </Provider>
  );
}
