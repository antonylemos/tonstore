import { PropsWithChildren } from 'react';
import { Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { stylesheet } from './styles';

export function Typography({ children }: PropsWithChildren) {
  const { styles } = useStyles(stylesheet);

  return <Text style={styles.typography}>{children}</Text>;
}
