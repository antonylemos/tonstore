import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  typography: {
    color: theme.colors.action,
    variants: {
      type: {
        default: {
          fontFamily: 'Satoshi-Regular',
          ...theme.font.md,
        },
        title: {
          fontFamily: 'Satoshi-Bold',
          ...theme.font.xlg,
        },
        span: {
          fontFamily: 'Satoshi-Bold',
          ...theme.font.md,
          color: theme.colors.surface,
        },
      },
    },
  },
}));
