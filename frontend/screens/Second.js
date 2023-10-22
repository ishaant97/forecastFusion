import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/mainScreen/Header';
import MainView from '../components/mainScreen/MainView';
import TimeChart from '../components/mainScreen/TimeChart';
import SunReminder from '../components/mainScreen/SunReminder';
import Forecast from '../components/mainScreen/Forecast';
import Cards from '../components/mainScreen/Cards';
import AdditionalInfo from '../components/mainScreen/AdditionalInfo';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Main({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Image blurRadius={40} style={{ position: 'absolute', width: '100%', height: '100%' }} source={require('../assets/images/bg.png')} />
            <SafeAreaView style={styles.container}>
                <View style={styles.SecondView}>
                    <ScrollView>
                        <View style={styles.SunReminder}>
                            <SunReminder />
                        </View>
                        <View style={styles.Forecast}>
                            <Forecast />
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
    SecondView: {
        flex: 5.8,
        // backgroundColor: '#7EB0EF',
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 3,
    },
    Header: {
        flex: 0.75,
        // backgroundColor: 'transparent',
        width: '100%',
    },
    MainView: {
        flex: 3,
        width: '100%',
        // backgroundColor: 'transparent',
        marginBottom: 30,
    },
    SunReminder: {
        flex: 1.3,
        marginTop: 5,
        backgroundColor: '#62A1EE',
        width: '100%',
        borderRadius: 25,
        columnGap: 5,
        marginTop: 10,
        padding: 20
    },
    Forecast: {
        flex: 2,
        backgroundColor: '#62A1EE',
        width: '100%',
        borderRadius: 25,
        padding: 10,
        columnGap: 5,
        marginTop: 10
    },
    Cards: {
        flex: 1.2,
        backgroundColor: '#62A1EE',
        width: '100%',
        borderRadius: 25,
        padding: 10,
        marginTop: 10

    },
});
