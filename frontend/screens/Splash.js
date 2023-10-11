import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';;


export default function Splash({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Main');
        }, 2000);
    }, [])

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>Splash</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
