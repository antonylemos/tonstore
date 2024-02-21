import { Sun } from 'lucide-react-native';
import { Image, Pressable, View } from 'react-native';

import hiGif from '@app/assets/images/hi.gif';
import { Typography } from '@ui/components';
import { toggleTheme } from '@ui/styles/utils';

import { useHome } from './useHome';

export function Home() {
  const { styles, theme } = useHome();

  return (
    <View style={styles.container}>
      <View style={styles.greeting}>
        <Image source={hiGif} style={styles.emotion} />
        <Typography>Welcome to Tonstore!</Typography>
      </View>

      <Pressable style={styles.button} onPress={toggleTheme}>
        <Sun size={24} color={theme.colors.typography} />
        <Typography>Toggle theme!</Typography>
      </Pressable>
    </View>
  );
}
