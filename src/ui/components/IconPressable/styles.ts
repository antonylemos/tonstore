import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  iconPressable: {
    padding: theme.spacing.xsm,
    borderRadius: theme.spacing.xsm,
  },
}));
