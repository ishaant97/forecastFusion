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
          {/* <Image style={{ width: '100%', height: '100%' }} source={require('./assets/images/bg.png')} />
          <View style={{ position: 'absolute', height: '100%', width: '100%', backgroundColor: 'transparent', zIndex: 1 }}>
            <AppNavigator />
          </View> */}
        </View>
      </LocationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'transparent'
  },
});
