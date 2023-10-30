import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import SunReminder from '../components/secondScreen/SunReminder';
import Forecast from '../components/secondScreen/Forecast';
import Cards from '../components/secondScreen/Cards';
import { SafeAreaView } from 'react-native-safe-area-context';
import Tommorow from '../components/secondScreen/Tommorow';


export default function Second() {
    return (
        <View style={{ flex: 1 }}>
            <Image blurRadius={40} style={{ position: 'absolute', width: '100%', height: '100%' }} source={require('../assets/images/bg.png')} />
            <SafeAreaView style={styles.container}>
                <View style={styles.Tommorow}>
                    <Tommorow />
                </View>
                <View style={styles.SecondView}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.Forecast}>
                            <Forecast />
                        </View>
                        <View style={styles.SunReminder}>
                            <SunReminder />
                        </View>
                        <View style={styles.Cards}>
                            <Cards />
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#7EB0EF',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        // gap: 5,
        padding: 15
    },
    Tommorow: {
        flex: 4,
        backgroundColor: '#385a60',
        width: '100%',
        borderRadius: 25,
        shadowColor: 'yellow',
        elevation: 20
    },
    SecondView: {
        flex: 5.8,
        // backgroundColor: '#7EB0EF',
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: 3,
    },
    Forecast: {
        flex: 2,
        // backgroundColor: '#62A1EE',
        backgroundColor: '#385a60',
        width: '100%',
        borderRadius: 25,
        padding: 10,
        // columnGap: 5,
        marginTop: 10
    },
    SunReminder: {
        flex: 1.3,
        // backgroundColor: '#62A1EE',
        backgroundColor: '#385a60',
        width: '100%',
        borderRadius: 25,
        // columnGap: 5,
        marginTop: 10,
        padding: 20
    },
    Cards: {
        flex: 1.2,
        // backgroundColor: '#62A1EE',
        // backgroundColor: '#385a60',
        backgroundColor: 'transparent',
        width: '100%',
        borderRadius: 25,
        // padding: 10,
        marginTop: 10

    },
});
