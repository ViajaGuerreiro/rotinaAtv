import { StyleSheet, View } from 'react-native';
import Imagem from './src/components/imagem';

export default function App() {
  return (
    <View style={styles.container}>
      <Imagem/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7CA1B4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Imagem: {
    height:200,
    width: 200
  }
});
