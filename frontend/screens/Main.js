import { Image, StyleSheet, View } from 'react-native';
import Header from '../components/mainScreen/Header';
import MainView from '../components/mainScreen/MainView';
import TimeChart from '../components/mainScreen/TimeChart';
import { SafeAreaView } from 'react-native-safe-area-context';
import AdditionalInfo from '../components/mainScreen/AdditionalInfo';


export default function Main({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Image blurRadius={50} style={{ position: 'absolute', width: '100%', height: '100%' }} source={require('../assets/images/bg.png')} />
            <SafeAreaView style={styles.container}>
                <View style={styles.Header} >
                    <Header navigation={navigation} />
                </View>
                <View style={styles.MainView}>
                    <MainView navigation={navigation} />
                </View>
                <View style={styles.AdditionalInfo}>
                    <AdditionalInfo />
                </View>
                <View style={styles.TimeChart}>
                    <TimeChart />
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
    Header: {
        flex: 1,
        // backgroundColor: 'transparent',
        width: '100%',
        // marginBottom: 30
    },
    MainView: {
        flex: 8,
        width: '100%',
        // backgroundColor: 'transparent',
        // marginBottom: 30,
    },
    AdditionalInfo: {
        flex: 2,
        backgroundColor: '#385a60',
        // backgroundColor: '#1f464c',
        width: '100%',
        marginTop: 15,
        padding: 10,
        borderRadius: 25,
        // marginRight: 60
    },
    TimeChart: {
        flex: 2,
        backgroundColor: '#385a60',
        width: '100%',
        borderRadius: 25,
        padding: 15,
        // columnGap: 5,
        marginTop: 10,
    },
});
