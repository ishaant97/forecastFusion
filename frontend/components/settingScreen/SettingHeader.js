import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import { TouchableHighlight } from 'react-native-gesture-handler';


export default function SettingHeader({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.Text}>
                <Text style={{ fontSize: 35, fontWeight: '500', color: '#BCBFF4' }}>Weather Settings</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Main')} style={styles.Icon}>
                <Ionicons name="arrow-back-outline" size={30} color="#BCBFF4" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    Text: {
        flex: 4.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45
    },
    Icon: {
        flex: 1,
        justifyContent: 'flex-end',
        margin: 20
    }
});
