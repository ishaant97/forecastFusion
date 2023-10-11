import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { FontAwesome5 } from '@expo/vector-icons';


export default function AdditionalInfo() {
    return (
        <View style={styles.container}>
            <View style={styles.Informations}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Icon name="flower-pollen-outline" size={25} color="black" />
                    <Text>Polen</Text>
                </View>
                <View>
                    <Text>None</Text>
                </View>
            </View>
            <View style={styles.Informations}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Icon2 name="API" size={25} color="black" />
                    <Text>AQI</Text>
                </View>
                <View>
                    <Text>Moderate 104</Text>
                </View>
            </View>
            <View style={styles.Informations}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <FontAwesome5 name="running" size={24} color="black" />
                    <Text>Running</Text>
                </View>
                <View>
                    <Text>Very Poor</Text>
                </View>
            </View>
            <View style={styles.Informations}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <FontAwesome5 name="car" size={24} color="black" />
                    <Text>Driving difficulty</Text>
                </View>
                <View>
                    <Text>None</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Informations: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    }

})