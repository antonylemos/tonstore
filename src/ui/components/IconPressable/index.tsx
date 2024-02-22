import { Pressable, PressableProps } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { stylesheet } from './styles';

export function IconPressable({ children, ...props }: PressableProps) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <Pressable
      android_ripple={{
        color: theme.colors.action,
        radius: theme.spacing.lg,
      }}
      style={styles.iconPressable}
      {...props}
    >
      {children}
    </Pressable>
  );
}
