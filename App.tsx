import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  text: {
    fontFamily: 'Satoshi-Bold',
    fontSize: 16,
    color: theme.colors.typography,
  },
}));

export function App() {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Tonstore!</Text>
    </View>
  );
}
