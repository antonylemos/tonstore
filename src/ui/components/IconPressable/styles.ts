import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  iconPressable: {
    flexDirection: 'row',
    gap: theme.spacing.xsm,
    padding: theme.spacing.xsm,
    borderRadius: theme.spacing.xsm,
  },
}));
