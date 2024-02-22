import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  card: {
    flex: 1,
    height: 160,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.spacing.xsm,
    marginBottom: theme.spacing.lg,
  },
  flag: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: theme.spacing.xsm,
    borderTopRightRadius: theme.spacing.xsm,
    resizeMode: 'stretch',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: theme.colors.action,
    width: '100%',
    padding: theme.spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing.xsm,
    borderBottomLeftRadius: theme.spacing.xsm,
    borderBottomRightRadius: theme.spacing.xsm,
  },
}));
