import { Plus } from 'lucide-react-native';
import { Image, Pressable, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { ICountry } from '@app/types';

import { Typography } from '..';

import { stylesheet } from './styles';

export function CountryCard({ flags, name }: ICountry) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View key={name.common} style={styles.card}>
      <Image source={{ uri: flags.png }} style={styles.flag} alt={flags.alt} />
      <Pressable
        style={styles.button}
        android_ripple={{
          color: theme.colors.surface,
        }}
      >
        <Plus size={24} color={theme.colors.surface} />
        <Typography type="span">Adicionar</Typography>
      </Pressable>
    </View>
  );
}
