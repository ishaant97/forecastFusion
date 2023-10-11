import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import DrawerNavigator from './DrawerNavigator';



export default function AppNavigator() {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
