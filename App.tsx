import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>2CCA</Text>
      <Text style={styles.subtitle}>Ciência da Computação</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5fbcfa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffff',
    fontSize: 40,
    fontWeight: 'light'
  },
  subtitle: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'light'
  }
});
