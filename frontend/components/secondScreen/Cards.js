import { StyleSheet, Text, View } from 'react-native';;
import Icon3 from 'react-native-vector-icons/Feather';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useContext, useEffect, useState } from 'react';
import { LocationContext } from '../../context/Location';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function Cards() {
    const { location } = useContext(LocationContext);
    // const [humidity, setHumidity] = useState(null);
    // const [windSpeed, setWindSpeed] = useState(null);
    // const [uv, setUv] = useState(null);
    const [uvStatus, setUvStatus] = useState(null);
    const [sunRise, setSunRise] = useState(null);
    const [sunSet, setSunSet] = useState(null);
    const [moonRise, setMoonRise] = useState(null);
    const [moonSet, setMoonSet] = useState(null);
    const [moonPhase, setMoonPhase] = useState(null);
    const [moonIllumination, setMoonIllumination] = useState(null);

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
            // setHumidity(response.data.current.humidity);
            // setWindSpeed(roundOff(response.data.current.wind_kph));
            // setUv(response.data.current.uv);
            // getUVStatus();
            setSunRise(response.data.forecast.forecastday[0].astro.sunrise);
            setSunSet(response.data.forecast.forecastday[0].astro.sunset);
            setMoonRise(response.data.forecast.forecastday[0].astro.moonrise);
            setMoonSet(response.data.forecast.forecastday[0].astro.moonset);
            setMoonPhase(response.data.forecast.forecastday[0].astro.moon_phase);
            setMoonIllumination(response.data.forecast.forecastday[0].astro.moon_illumination);
        } catch (error) {
            console.error(error);
        }
    }

    // const getUVStatus = (uv) => {
    //     if (uv <= 2) {
    //         setUvStatus("Low: Minimal to no risk")
    //     } else if (uv > 2 && uv <= 5) {
    //         setUvStatus("Moderate: Low to moderate risk")
    //     } else if (uv > 5 && uv <= 7) {
    //         setUvStatus("High: Moderate to high risk")
    //     } else if (uv > 7 && uv <= 10) {
    //         setUvStatus("Very High: High to very high risk")
    //     } else {
    //         setUvStatus("Extreme: Very high risk")
    //     }
    // }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.cards}>
                    <Icon3 name="sunrise" size={20} color="white" />
                    <Text style={{ fontSize: 18, fontWeight: '400', color: '#e6eaeb' }}>Sunrise</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: '#cdd6d7' }}>{sunRise}</Text>
                </View>
                <View style={styles.cards}>
                    <Icon3 name="sunset" size={20} color="white" />
                    <Text style={{ fontSize: 18, fontWeight: '400', color: '#e6eaeb' }}>Sunset</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: '#cdd6d7' }}>{sunSet}</Text>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.cards}>
                    <MaterialCommunityIcons name="moon-waning-crescent" size={24} color="white" />
                    <Text style={{ fontSize: 18, fontWeight: '400', color: '#e6eaeb' }}>MoonRise</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: '#cdd6d7' }}>{moonRise}</Text>
                </View>
                <View style={styles.cards}>
                    <FontAwesome5 name="moon" size={24} color="white" />
                    <Text style={{ fontSize: 18, fontWeight: '400', color: '#e6eaeb' }}>MoonSet</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: '#cdd6d7' }}>{moonSet}</Text>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.cards}>
                    <Ionicons name="moon" size={24} color="white" />
                    <Text style={{ fontSize: 18, fontWeight: '400', color: '#e6eaeb' }}>Moon Light</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: '#cdd6d7' }}>{moonIllumination}%</Text>
                </View>
                <View style={styles.cards}>
                    <MaterialCommunityIcons name="moon-waxing-gibbous" size={24} color="white" />
                    <Text style={{ fontSize: 18, fontWeight: '400', color: '#e6eaeb' }}>Moon Phase</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: '#cdd6d7' }}>{moonPhase}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#7EB0EF',
        // padding: 15
    },
    cards: {
        backgroundColor: '#385a60',
        // backgroundColor: '#7EB0EF',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 10,
        padding: 20,
        width: '45%',
        height: '95%',
        gap: 5
    },
    additionalStyles: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    additionalStyles2: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%'
    }
});
