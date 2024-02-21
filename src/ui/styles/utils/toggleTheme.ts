import { UnistylesRuntime } from 'react-native-unistyles';

export function toggleTheme() {
  UnistylesRuntime.setTheme(
    UnistylesRuntime.themeName === 'dark' ? 'light' : 'dark',
  );
}
