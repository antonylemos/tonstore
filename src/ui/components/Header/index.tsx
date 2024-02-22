import { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { stylesheet } from './styles';

export function Header({ children }: PropsWithChildren) {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.header}>{children}</View>;
}
