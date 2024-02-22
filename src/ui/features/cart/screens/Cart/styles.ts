import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  greeting: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xsm,
  },
  emotion: {
    width: 20,
    height: 20,
  },
  countriesList: {
    paddingHorizontal: theme.spacing.xsm,
    paddingVertical: theme.spacing.lg,
  },
}));
