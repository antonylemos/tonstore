import { View } from 'react-native';

import { Typography } from '@ui/components';

import { useHome } from './useHome';

export function Home() {
  const { styles } = useHome();

  return (
    <View style={styles.container}>
      <Typography>Welcome to Tonstore!</Typography>
    </View>
  );
}
