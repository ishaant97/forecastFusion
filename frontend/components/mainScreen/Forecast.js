import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Feather';


export default function Forecast() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 7 }}>
                <View>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Today</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                    <Text style={{ color: 'lightblue', fontSize: 18, fontWeight: 'bold' }}><Icon name="water-outline" size={20} color="lightblue" />1%</Text>
                    <Icon2 name="sun" size={20} color="orange" />
                    <Icon2 name="sun" size={20} color="orange" />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>34°</Text>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>23°</Text>
                </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 7 }}>
                <View>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Sunday</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                    <Text style={{ color: 'lightblue', fontSize: 18, fontWeight: 'bold' }}><Icon name="water-outline" size={20} color="lightblue" />1%</Text>
                    <Icon2 name="sun" size={20} color="orange" />
                    <Icon2 name="sun" size={20} color="orange" />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>34°</Text>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>23°</Text>
                </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 7 }}>
                <View>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Monday</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                    <Text style={{ color: 'lightblue', fontSize: 18, fontWeight: 'bold' }}><Icon name="water-outline" size={20} color="lightblue" />1%</Text>
                    <Icon2 name="sun" size={20} color="orange" />
                    <Icon2 name="sun" size={20} color="orange" />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>34°</Text>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>23°</Text>
                </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 7 }}>
                <View>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Tuesday</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                    <Text style={{ color: 'lightblue', fontSize: 18, fontWeight: 'bold' }}><Icon name="water-outline" size={20} color="lightblue" />1%</Text>
                    <Icon2 name="sun" size={20} color="orange" />
                    <Icon2 name="sun" size={20} color="orange" />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>34°</Text>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>23°</Text>
                </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 7 }}>
                <View>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Wednesday</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                    <Text style={{ color: 'lightblue', fontSize: 18, fontWeight: 'bold' }}><Icon name="water-outline" size={20} color="lightblue" />1%</Text>
                    <Icon2 name="sun" size={20} color="orange" />
                    <Icon2 name="sun" size={20} color="orange" />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>34°</Text>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>23°</Text>
                </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 7 }}>
                <View>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Thrusday</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                    <Text style={{ color: 'lightblue', fontSize: 18, fontWeight: 'bold' }}><Icon name="water-outline" size={20} color="lightblue" />1%</Text>
                    <Icon2 name="sun" size={20} color="orange" />
                    <Icon2 name="sun" size={20} color="orange" />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>34°</Text>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>23°</Text>
                </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 7 }}>
                <View>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Friday</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                    <Text style={{ color: 'lightblue', fontSize: 18, fontWeight: 'bold' }}><Icon name="water-outline" size={20} color="lightblue" />1%</Text>
                    <Icon2 name="sun" size={20} color="orange" />
                    <Icon2 name="sun" size={20} color="orange" />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>34°</Text>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>23°</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
