import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Main() {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <TouchableOpacity>
                    <Text style={{ margin: 15, color: 'white' }}><Ionicons name="md-menu" size={30} color="white" /></Text>
                </TouchableOpacity>
            </View>
            <View style={styles.location}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>Phagwara</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
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
