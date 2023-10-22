import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useContext, useEffect, useState } from 'react';
import { LocationContext } from '../../context/Location';
import axios from 'axios';

export default function AdditionalInfo() {
    const { location } = useContext(LocationContext);
    const [humidity, setHumidity] = useState(null);
    const [windSpeed, setWindSpeed] = useState(null);
    const [uv, setUv] = useState(null);
    const [rain, setRain] = useState(null);

    useEffect(() => {
        getInfo();
    }, []
    )

    const roundOff = (num) => {
        return Math.round(num);
    }

    const getInfo = async () => {
        // getLocation();
        const options = {
            method: 'GET',
            url: process.env.EXPO_PUBLIC_API_URL,
            params: {
                q: `${location}`,
                days: '3'
            },
            headers: {
                'X-RapidAPI-Key': process.env.EXPO_PUBLIC_API_KEY,
                'X-RapidAPI-Host': process.env.EXPO_PUBLIC_API_HOST
            }
        };

        try {
            const response = await axios.request(options);
            // console.log(response.data);
            setHumidity(response.data.current.humidity);
            setWindSpeed(roundOff(response.data.current.wind_kph));
            setUv(response.data.current.uv);
            setRain(response.data.forecast.forecastday[0].day.daily_chance_of_rain);

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.Information}>
                <Feather name="wind" size={24} color="white" />
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#e6eaeb' }}>{windSpeed} km/h</Text>
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#cdd6d7' }}>Wind</Text>
            </View>
            <View style={styles.Information}>
                <FontAwesome5 name="cloud-sun-rain" size={24} color="white" />
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#e6eaeb' }}>{rain}%</Text>
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#cdd6d7' }}>Rain</Text>
            </View>
            <View style={styles.Information}>
                <Ionicons name="ios-water" size={24} color="white" />
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#e6eaeb' }}>{humidity}%</Text>
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#cdd6d7' }}>Humidity</Text>
            </View>
            <View style={styles.Information}>
                <Ionicons name="sunny-outline" size={24} color="white" />
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#e6eaeb' }}>{uv}</Text>
                <Text style={{ fontSize: 15, fontWeight: '500', color: '#cdd6d7' }}>UV</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    Information: {
        flex: 1,
        alignItems: 'center'
    }
})