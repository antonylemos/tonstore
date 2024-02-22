import { StatusBar, StatusBarStyle } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { Providers } from '@app/providers';
import { Routes } from '@app/router';
import { isDarkTheme } from '@ui/styles/utils';

export function App() {
  const { theme } = useStyles();
  const barStyle =
    `${isDarkTheme ? 'light' : 'dark'}-content` as StatusBarStyle;

  return (
    <Providers>
      <StatusBar backgroundColor={theme.colors.surface} barStyle={barStyle} />

      <Routes />
    </Providers>
  );
}
