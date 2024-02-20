import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Satoshi-Bold',
    fontSize: 16,
  },
});

export function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>Welcome to Tonstore!</Text>
    </View>
  );
}
