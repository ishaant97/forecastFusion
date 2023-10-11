import { StyleSheet, Text, View } from 'react-native';;
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Feather';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Cards() {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.cards}>
                    <Icon name="sun-o" size={20} color="orange" />
                    <Text>UV Index</Text>
                    <Text>Low</Text>
                </View>
                <View style={styles.cards}>
                    <MaterialCommunityIcons name="water-percent" size={40} color="lightblue" />
                    <Text>Humidity</Text>
                    <Text>74%</Text>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.cards}>
                    <Icon3 name="wind" size={20} color="grey" />
                    <Text>Wind</Text>
                    <Text>5 km/h</Text>
                </View>
                <View style={[styles.cards, styles.additionalStyles]}>
                    <View style={styles.additionalStyles2}>
                        <Icon3 name="sunrise" size={20} color="grey" />
                        <Text>Sunrise</Text>
                    </View>
                    <View style={styles.additionalStyles2}>
                        <Icon3 name="sunset" size={20} color="grey" />
                        <Text>Sunrise</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    cards: {
        backgroundColor: '#7EB0EF',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 10,
        padding: 30

    },
    additionalStyles: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    additionalStyles2: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});
