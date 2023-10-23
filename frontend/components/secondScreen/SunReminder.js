import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LocationContext } from '../../context/Location';
import axios from 'axios';


export default function SunReminder() {
    const { location } = useContext(LocationContext);
    const [sunRise, setSunRise] = useState(null);
    const [sunSet, setSunSet] = useState(null);
    const [word, setWord] = useState(null);
    const [displaySun, setDisplaySun] = useState(null);
    const [sunRiseInMilitaryTime, setSunRiseInMilitaryTime] = useState(null);
    const [sunSetInMilitaryTime, setSunSetInMilitaryTime] = useState(null);


    useEffect(() => {
        getInfo();
    }, []
    )

    useEffect(() => {
        if (sunSet) {
            const riseMilitaryTime = convertToMilitaryTime(sunRise);
            const setMilitaryTime = convertToMilitaryTime(sunSet);
            setSunRiseInMilitaryTime(riseMilitaryTime);
            setSunSetInMilitaryTime(setMilitaryTime);
        }
        displaySunriseOrSunset();
    }, [sunRise, sunSet]
    )
    // const roundOff = (num) => {
    //     return Math.round(num);
    // }

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
            setSunRise(response.data.forecast.forecastday[0].astro.sunrise);
            setSunSet(response.data.forecast.forecastday[0].astro.sunset);
        } catch (error) {
            console.error(error);
        }
    }

    function convertToMilitaryTime(timeString) {
        // Split the input time string into hours, minutes, and AM/PM



        // Split the input time string into hours, minutes, and AM/PM
        const timeComponents = timeString.split(/[:\s]/);

        let hours = parseInt(timeComponents[0]);
        const minutes = parseInt(timeComponents[1]);
        const period = timeComponents[2].toUpperCase();

        // Convert hours to military time (24-hour format)
        if (period === "PM" && hours !== 12) {
            hours += 12;
        } else if (period === "AM" && hours === 12) {
            hours = 0;
        }

        // Format hours and minutes as a four-digit string
        return `${hours.toString().padStart(2, '0')}${minutes.toString().padStart(2, '0')}`;
    }

    function getCurrentMilitaryTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return hours + minutes;
    }

    const currentTime = getCurrentMilitaryTime();



    function displaySunriseOrSunset() {
        // Get the current time
        const currentTime = getCurrentMilitaryTime();
        // const currentTime = 1752;

        // Check if the current time is before sunrise
        if (currentTime < sunRiseInMilitaryTime) {
            setWord("Sunrise");
            setDisplaySun(`Sunrise will be at ${sunRise}`);
            // console.warn(sunRiseInMilitaryTime);
        }
        // Check if the current time is before sunset
        else if (currentTime < sunSetInMilitaryTime) {
            setWord("Sunset");
            setDisplaySun(`Sunset will be at ${sunSet}`);
            // console.warn(sunRiseInMilitaryTime);
        }
        // If neither sunrise nor sunset has occurred yet, assume sunrise is next
        else {
            setWord("Sunriseee");
            setDisplaySun(`Sunrise will be at ${sunRise}`);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: 'bold' }}>Don't miss the {word}</Text>
            <Text style={{ color: "white", fontSize: 14 }}>{displaySun}</Text>
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
