import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import LottieView from 'lottie-react-native';


export default function MainView() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.mainContent}>
                    <View>
                        <Text style={{ fontSize: 75, color: 'white' }}>32°</Text>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Sunny</Text>
                    </View>
                    <View>
                        <View>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', paddingTop: 15 }}>Phagwara<Icon name="location-pin" size={20} color="#fff" /></Text>
                            <Text style={{ color: 'white', fontSize: 15 }}>40°/25° Feels like 40°</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    {/* <Text style={{ color: 'white' }}>Lottie</Text> */}
                    <LottieView
                        autoPlay
                        source={require('../../assets/lottie/sun.json')}
                    />

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContent: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        margin: 20,
        // backgroundColor: 'blue',
        height: '77%'
    }
});
