import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function TimeChart() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }} > Generally clear. Highs 33 to 55 and lows 18 to 20.</Text>
            </View>
            <ScrollView horizontal={true} >
                <View style={styles.dayForecastItem}>
                    <Text style={{ color: 'white', fontSize: 13 }}>11.30</Text>
                    <Icon name="sun" size={25} color="orange" />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>30</Text>
                </View>
                <View style={styles.dayForecastItem}>
                    <Text style={{ color: 'white', fontSize: 13 }}>11.30</Text>
                    <Icon name="sun" size={25} color="orange" />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>30</Text>
                </View><View style={styles.dayForecastItem}>
                    <Text style={{ color: 'white', fontSize: 13 }}>11.30</Text>
                    <Icon name="sun" size={25} color="orange" />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>30</Text>
                </View><View style={styles.dayForecastItem}>
                    <Text style={{ color: 'white', fontSize: 13 }}>11.30</Text>
                    <Icon name="sun" size={25} color="orange" />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>30</Text>
                </View><View style={styles.dayForecastItem}>
                    <Text style={{ color: 'white', fontSize: 13 }}>11.30</Text>
                    <Icon name="sun" size={25} color="orange" />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>30</Text>
                </View><View style={styles.dayForecastItem}>
                    <Text style={{ color: 'white', fontSize: 13 }}>11.30</Text>
                    <Icon name="sun" size={25} color="orange" />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>30</Text>
                </View><View style={styles.dayForecastItem}>
                    <Text style={{ color: 'white', fontSize: 13 }}>11.30</Text>
                    <Icon name="sun" size={25} color="orange" />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>30</Text>
                </View><View style={styles.dayForecastItem}>
                    <Text style={{ color: 'white', fontSize: 13 }}>11.30</Text>
                    <Icon name="sun" size={25} color="orange" />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>30</Text>
                </View><View style={styles.dayForecastItem}>
                    <Text style={{ color: 'white', fontSize: 13 }}>11.30</Text>
                    <Icon name="sun" size={25} color="orange" />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>30</Text>
                </View><View style={styles.dayForecastItem}>
                    <Text style={{ color: 'white', fontSize: 13 }}>11.30</Text>
                    <Icon name="sun" size={25} color="orange" />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>30</Text>
                </View><View style={styles.dayForecastItem}>
                    <Text style={{ color: 'white', fontSize: 13 }}>11.30</Text>
                    <Icon name="sun" size={25} color="orange" />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>30</Text>
                </View>

            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dayForecastItem: {
        marginTop: 15,
        padding: 5,
        alignItems: 'center',
        gap: 5
    }


});
