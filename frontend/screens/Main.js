import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/mainScreen/Header';
import MainView from '../components/mainScreen/MainView';
import TimeChart from '../components/mainScreen/TimeChart';
import SunReminder from '../components/mainScreen/SunReminder';
import Forecast from '../components/mainScreen/Forecast';

export default function Main() {
    return (
        <View style={styles.container}>
            <View style={styles.Header} >
                <Header />
            </View>
            <View style={styles.MainView}>
                <MainView />
            </View>
            <View style={styles.TimeChart}>
                <TimeChart />
            </View>
            <View style={styles.SunReminder}>
                <SunReminder />
            </View>
            <View style={styles.Forecast}>
                <Forecast />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7EB0EF',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        padding: 15
    },
    Header: {
        flex: 0.75,
        width: '100%',
    },
    MainView: {
        flex: 3,
        // backgroundColor: 'red',
        width: '100%',
        marginBottom: 30
    },
    TimeChart: {
        flex: 2.5,
        backgroundColor: '#62A1EE',
        width: '100%',
        borderRadius: 25,
        padding: 15
    },
    SunReminder: {
        marginTop: 5,
        flex: 1.3,
        backgroundColor: '#62A1EE',
        width: '100%',
        borderRadius: 25
    },
    Forecast: {
        flex: 2,
        backgroundColor: '#62A1EE',
        width: '100%',
        borderRadius: 25,
        padding: 10
    }
});
