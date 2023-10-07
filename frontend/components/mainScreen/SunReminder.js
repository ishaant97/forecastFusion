import { StyleSheet, Text, View } from 'react-native';

export default function SunReminder() {
    return (
        <View style={styles.container}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: 'bold' }}>Don't miss the sunset</Text>
            <Text style={{ color: "white", fontSize: 14 }}>Sunset will be at 6:05pm</Text>
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
