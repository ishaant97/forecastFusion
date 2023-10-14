import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SettingHeader from '../components/settingScreen/SettingHeader';
import SettingMain from '../components/settingScreen/SettingMain'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';



export default function Setting({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.SettingHeader}>
                <SettingHeader navigation={navigation} />
            </View>
            <View style={styles.ScrollView}>
                <ScrollView>
                    <View style={styles.SettingMain}>
                        <SettingMain />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    ScrollView: {
        flex: 1.5,
    },
    SettingHeader: {
        flex: 1,
        // backgroundColor: 'red'
    },
    SettingMain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        // backgroundColor: 'blue'
    }
});
