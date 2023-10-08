import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';

export default function AdditionalInfo() {
    return (
        <View style={styles.container}>
            <View style={styles.Informations}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Icon name="flower-pollen-outline" size={25} color="grey" />
                    <Text>Polen</Text>
                </View>
                <View>
                    <Text>None</Text>
                </View>
            </View>
            <View style={styles.Informations}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Icon2 name="API" size={25} color="grey" />
                    <Text>AQI</Text>
                </View>
                <View>
                    <Text>Moderate 104</Text>
                </View>
            </View>
            <View style={styles.Informations}>
                <View>
                    <Text>Running</Text>
                </View>
                <View>
                    <Text>Very Poor</Text>
                </View>
            </View>
            <View style={styles.Informations}>
                <View>
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