import { PropsWithChildren } from 'react';
import { Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { stylesheet } from './styles';
import { ITypography } from './types';

export function Typography({ children, type }: PropsWithChildren<ITypography>) {
  const { styles } = useStyles(stylesheet, {
    type,
  });

  return <Text style={styles.typography}>{children}</Text>;
}
