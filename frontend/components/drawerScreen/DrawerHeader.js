import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function DrawerHeader() {
    return (
        <View style={styles.container}>
            <Text>DrawerYOYO</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'red'
    },
    menu: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    location: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
    }
});
