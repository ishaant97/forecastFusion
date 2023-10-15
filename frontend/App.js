import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './screens/AppNavigator';
import { LocationProvider } from './context/Location';

export default function App() {
  return (
    <>
      <LocationProvider>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <AppNavigator />
        </View>
      </LocationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#7EB0EF'
  },
});
