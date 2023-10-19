import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Splash';
import Main from './Main';
import Setting from './Setting';
import { View } from 'react-native';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='Splash'
                        component={Splash}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='Main'
                        component={Main}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='Setting'
                        component={Setting}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
});
