import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Splash';
import Main from './Main';


const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
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
        </Stack.Navigator>
    );
}