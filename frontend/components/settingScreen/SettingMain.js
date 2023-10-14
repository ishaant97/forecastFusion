import { StyleSheet, Text, TouchableOpacity, View, Switch } from 'react-native';
import { useState } from 'react';


export default function SettingMain() {
    const [isEnabledSwitch1, setIsEnabledSwitch1] = useState(false);
    const toggleSwitch1 = () => setIsEnabledSwitch1(previousState => !previousState);
    const [isEnabledSwitch2, setIsEnabledSwitch2] = useState(false);
    const toggleSwitch2 = () => setIsEnabledSwitch2(previousState => !previousState);
    return (
        <View style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 18 }}>Unit</Text>
                    <Text style={{ color: '#BCBFF4' }}>°C</Text>
                </TouchableOpacity>
                <Text numberOfLines={1} style={{ color: '#373743' }}>
                    __________________________________________________
                </Text>
                <TouchableOpacity style={{ marginTop: 10 }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Local Weather</Text>
                    <Text style={{ color: '#BCBFF4' }}>Agree</Text>
                </TouchableOpacity>
                <Text numberOfLines={1} style={{ color: '#373743' }}>
                    __________________________________________________
                </Text>
                <TouchableOpacity style={{ marginTop: 10 }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Auto Refresh</Text>
                    <Text style={{ color: '#BCBFF4' }}>Every 6 hours</Text>
                </TouchableOpacity>
                <Text numberOfLines={1} style={{ color: '#373743' }}>
                    __________________________________________________
                </Text>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => toggleSwitch1()}>
                    <View>
                        <Text style={{ color: 'white', fontSize: 18 }}>Auto Refresh on the go</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-start' }}>
                        <Switch
                            trackColor={{ false: '#767577', true: '#BCBFF4' }}
                            // thumbColor={isEnabledSwitch1 ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch1}
                            value={isEnabledSwitch1}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.View2}>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => toggleSwitch2()}>
                    <View>
                        <Text style={{ color: 'white', fontSize: 18 }}>Show Weather on Apps Screen</Text>
                    </View>
                    <View>
                        <Switch
                            trackColor={{ false: '#767577', true: '#BCBFF4' }}
                            // thumbColor={isEnabledSwitch2 ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch2}
                            value={isEnabledSwitch2}
                        />
                    </View>
                </TouchableOpacity>
                <Text numberOfLines={1} style={{ color: '#373743' }}>
                    __________________________________________________
                </Text>
                <TouchableOpacity style={{ marginTop: 10 }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Notifications</Text>
                </TouchableOpacity>
                <Text numberOfLines={1} style={{ color: '#373743' }}>
                    __________________________________________________
                </Text>
                <TouchableOpacity style={{ marginTop: 10 }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Customisation Service</Text>
                    <Text style={{ color: '#BCBFF4' }}>On</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.View3}>
                <TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 18 }}>Privacy Policy</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.View4}>
                <TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 18 }}>About ForcasFusion</Text>
                </TouchableOpacity>
                <Text numberOfLines={1} style={{ color: '#373743' }}>
                    __________________________________________________
                </Text>
                <TouchableOpacity style={{ marginTop: 10 }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Contact Us</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 15,
        gap: 18
    },
    View1: {
        flex: 4,
        width: '100%',
        backgroundColor: '#1A1A26',
        borderRadius: 25,
        padding: 15,
    },
    View2: {
        flex: 3,
        width: '100%',
        backgroundColor: '#1A1A26',
        borderRadius: 25,
        padding: 15,
    },
    View3: {
        flex: 1,
        width: '100%',
        backgroundColor: '#1A1A26',
        borderRadius: 25,
        padding: 15,
    },
    View4: {
        flex: 2,
        width: '100%',
        backgroundColor: '#1A1A26',
        borderRadius: 25,
        padding: 15,
    },
});
