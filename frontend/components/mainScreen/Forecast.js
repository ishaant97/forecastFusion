import { StyleSheet, Text, View } from 'react-native';

export default function Forecast() {
    return (
        <View style={styles.container}>
            <View><Text style={{ color: 'white' }}>Future Prediction Forecast</Text></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
