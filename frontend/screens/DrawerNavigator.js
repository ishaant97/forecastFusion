import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import StackNavigator from './StackNavigator';
import Setting from './Setting';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName='StackNavigator'>
            <Drawer.Screen name='StackNavigator' component={StackNavigator} options={{ headerShown: false }} />
            <Drawer.Screen name='Setting' component={Setting} options={{ headerShown: true }} />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
