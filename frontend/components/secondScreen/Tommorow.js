import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useContext, useEffect, useState } from 'react';
import { LocationContext } from '../../context/Location';
import axios from 'axios';
import LottieView from 'lottie-react-native';


export default function Tommorow() {
    const { location } = useContext(LocationContext);
    const [temp, setTemp] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [windSpeed, setWindSpeed] = useState(null);
    const [uv, setUv] = useState(null);
    const [rain, setRain] = useState(null);
    const [status, setStatus] = useState(null);

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
            setHumidity(response.data.forecast.forecastday[1].day.avghumidity);
            setWindSpeed(roundOff(response.data.forecast.forecastday[1].day.maxwind_kph));
            setUv(response.data.forecast.forecastday[1].day.uv);
            setRain(response.data.forecast.forecastday[1].day.daily_chance_of_rain);
            setTemp(roundOff(response.data.forecast.forecastday[1].day.avgtemp_c));
            setStatus(response.data.forecast.forecastday[1].day.condition.text);

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <LottieView
                            style={{ marginTop: 20, width: '100%' }}
                            autoPlay
                            source={require('../../assets/lottie/rain.json')}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, marginTop: 25, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 30, fontWeight: '500', color: 'white' }}>Tommorow</Text>
                    <Text style={{ fontSize: 80, fontWeight: '500', color: 'white', marginTop: 3 }}>{temp}°</Text>
                    <Text style={{ fontSize: 22, fontWeight: '500', color: 'white' }}>{status}</Text>
                </View>
            </View>
            <View style={styles.Infos}>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    Infos: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    Information: {
        flex: 1,
        alignItems: 'center'
    }
});
