import { Plus, Trash } from 'lucide-react-native';
import { Image, Pressable, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { Typography } from '..';

import { stylesheet } from './styles';
import { ICountryCard } from './types';

export function CountryCard({ action, country, type = 'add' }: ICountryCard) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View key={country.name.common} style={styles.card}>
      <Image
        source={{ uri: country.flags.png }}
        style={styles.flag}
        alt={country.flags.alt}
      />
      <Pressable
        style={styles.button}
        android_ripple={{
          color: theme.colors.surface,
        }}
        onPress={() => action(country)}
      >
        {type === 'add' ? (
          <Plus size={24} color={theme.colors.surface} />
        ) : (
          <Trash size={24} color={theme.colors.surface} />
        )}
        <Typography type="span">
          {type === 'add' ? 'Adicionar' : 'Remover'}
        </Typography>
      </Pressable>
    </View>
  );
}
