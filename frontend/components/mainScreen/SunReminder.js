import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LocationContext } from '../../context/Location';
import axios from 'axios';


export default function SunReminder() {
    const { location } = useContext(LocationContext);
    const [sunRise, setSunRise] = useState(null);
    const [sunSet, setSunSet] = useState(null);

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
            url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
            params: {
                q: `${location}`,
                days: '3'
            },
            headers: {
                'X-RapidAPI-Key': '3962322a1amshbf868885feddf98p100253jsnc699c8ec37ff',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            // console.log(response.data);

        } catch (error) {
            console.error(error);
        }
    }

    function isDaytimeBasedOnTimezone(sunriseTime, sunsetTime) {
        const currentTime = new Date();
        return currentTime >= sunriseTime && currentTime < sunsetTime;
    }

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
