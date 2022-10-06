import { StyleSheet, SafeAreaView } from 'react-native';
import Main from './app/main';

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    // </SafeAreaView>
      <Main/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
