import { StatusBar, StatusBarStyle } from 'react-native';
import { UnistylesRuntime, useStyles } from 'react-native-unistyles';

import { Providers } from '@app/providers';
import { Routes } from '@app/router';

export function App() {
  const { theme } = useStyles();
  const barStyle =
    `${UnistylesRuntime.themeName === 'dark' ? 'light' : 'dark'}-content` as StatusBarStyle;

  return (
    <Providers>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={barStyle}
      />

      <Routes />
    </Providers>
  );
}
