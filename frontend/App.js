import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './screens/AppNavigator';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <Main /> */}
        <AppNavigator />
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#7EB0EF'
  },
});
