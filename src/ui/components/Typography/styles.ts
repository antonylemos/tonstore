import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  typography: {
    color: theme.colors.typography,
    variants: {
      type: {
        default: {
          fontFamily: 'Satoshi-Regular',
          ...theme.font.md,
        },
      },
    },
  },
}));
