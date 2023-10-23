import { StyleSheet, Text, View } from 'react-native';;
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Feather';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useContext, useEffect, useState } from 'react';
import { LocationContext } from '../../context/Location';
import axios from 'axios';


export default function Cards() {
    const { location } = useContext(LocationContext);
    const [humidity, setHumidity] = useState(null);
    const [windSpeed, setWindSpeed] = useState(null);
    const [uv, setUv] = useState(null);
    const [uvStatus, setUvStatus] = useState(null);
    const [sunRise, setSunRise] = useState(null);
    const [sunSet, setSunSet] = useState(null);
    const [moonRise, setMoonRise] = useState(null);
    const [moonSet, setMoonSet] = useState(null);
    const [moonPhase, setMoonPhase] = useState(null);

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
            getUVStatus();
            setSunRise(response.data.forecast.forecastday[0].astro.sunrise);
            setSunSet(response.data.forecast.forecastday[0].astro.sunset);
            setMoonRise(response.data.forecast.forecastday[0].astro.moonrise);
            setMoonSet(response.data.forecast.forecastday[0].astro.moonset);
            setMoonPhase(response.data.forecast.forecastday[0].astro.moon_phase);
        } catch (error) {
            console.error(error);
        }
    }

    const getUVStatus = (uv) => {
        if (uv <= 2) {
            setUvStatus("Low: Minimal to no risk")
        } else if (uv > 2 && uv <= 5) {
            setUvStatus("Moderate: Low to moderate risk")
        } else if (uv > 5 && uv <= 7) {
            setUvStatus("High: Moderate to high risk")
        } else if (uv > 7 && uv <= 10) {
            setUvStatus("Very High: High to very high risk")
        } else {
            setUvStatus("Extreme: Very high risk")
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.cards}>
                    <Icon name="sun-o" size={20} color="orange" />
                    <Text>UV Index</Text>
                    <Text>{uv}</Text>
                    <Text>{uvStatus}</Text>
                </View>
                <View style={styles.cards}>
                    <MaterialCommunityIcons name="water-percent" size={40} color="lightblue" />
                    <Text>Humidity</Text>
                    <Text>{humidity}%</Text>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.cards}>
                    <Icon3 name="wind" size={20} color="grey" />
                    <Text>Wind</Text>
                    <Text>{windSpeed} km/h</Text>
                </View>
                <View style={styles.cards}>
                    <Icon3 name="sunrise" size={20} color="grey" />
                    <Text>Moon Phase</Text>
                    <Text>{moonPhase}</Text>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.cards}>
                    <Icon3 name="sunrise" size={20} color="grey" />
                    <Text>Sunrise</Text>
                    <Text>{sunRise}</Text>
                </View>
                <View style={styles.cards}>
                    <Icon3 name="sunset" size={20} color="grey" />
                    <Text>Sunset</Text>
                    <Text>{sunSet}</Text>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.cards}>
                    <Icon3 name="sunrise" size={20} color="grey" />
                    <Text>MoonRise</Text>
                    <Text>{moonRise}</Text>
                </View>
                <View style={styles.cards}>
                    <Icon3 name="sunset" size={20} color="grey" />
                    <Text>MoonSet</Text>
                    <Text>{moonSet}</Text>
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
    cards: {
        backgroundColor: '#7EB0EF',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 10,
        padding: 20,
        width: '45%',
        height: '95%'

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
