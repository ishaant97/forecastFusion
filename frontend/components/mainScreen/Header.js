import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';


export default function Header({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.Name}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>ForecastFusion</Text>
            </View>
            <View style={styles.Setting}>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <Text style={{ margin: 15, color: 'white' }}><SimpleLineIcons name="settings" size={24} color="white" /></Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    Name: {
        flex: 1,
        alignItems: 'flex-start',
        // backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    Setting: {
        flex: 1,
        alignItems: 'flex-end',
        // backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    Location: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
