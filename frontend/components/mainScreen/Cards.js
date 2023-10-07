import { StyleSheet, Text, View } from 'react-native';;
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Cards() {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={styles.cards}>
                    <Icon name="sun-o" size={20} color="#fff" />
                    <Text>UV Index</Text>
                    <Text>Low</Text>
                </View>
                <View style={styles.cards}>
                    <Icon></Icon>
                    <Text>Humidity</Text>
                    <Text>74%</Text>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={styles.cards}>
                    <Text>Wind</Text>
                    <Text>5 km/h</Text>
                </View>
                <View style={styles.cards}>
                    <Text>Sunrise</Text>
                    <Text>Sunset</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cards: {
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',

    }
});
