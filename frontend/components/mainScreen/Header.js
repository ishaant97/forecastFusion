import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <Text style={{ margin: 15, color: 'white' }}><Icon name="menu" size={30} color="#fff" /></Text>
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
        justifyContent: 'center'
    }
});
