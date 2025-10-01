import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (

    <View style={styles.container}>
      <Text style={styles.mainText}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
  },
})