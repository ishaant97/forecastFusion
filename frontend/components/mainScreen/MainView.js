import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import LottieView from 'lottie-react-native';
import { useContext, useEffect, useState } from 'react';
import { LocationContext } from '../../context/Location';
import axios from 'axios';

export default function MainView() {
    const { location } = useContext(LocationContext);
    // const [location, setLocation] = useState(null);
    const [temp, setTemp] = useState(null);
    const [status, setStatus] = useState(null);
    const [statusIcon, setStatusIcon] = useState(null);
    const [feelsLike, setFeelsLike] = useState(null);
    const [minTemp, setMinTemp] = useState(null);
    const [maxTemp, setMaxTemp] = useState(null);

    useEffect(() => {
        getInfo();
    }, []
    )

    const roundOff = (num) => {
        return Math.round(num);
    }

    // const getLocation = async () => {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    //         params: { q: `${lat},${long}` },
    //         headers: {
    //             'X-RapidAPI-Key': '3962322a1amshbf868885feddf98p100253jsnc699c8ec37ff',
    //             'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    //         }
    //     };

    //     try {
    //         const response = await axios.request(options);
    //         // console.warn(response.data);
    //         setLocation(response.data.location.name);
    //     } catch (error) {
    //         console.error(error);
    //     }
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
            setTemp(roundOff(response.data.current.temp_c));
            setStatus(response.data.current.condition.text);
            setStatusIcon(response.data.current.condition.icon);
            setFeelsLike(roundOff(response.data.current.feelslike_c));
            setMinTemp(roundOff(response.data.forecast.forecastday[0].day.mintemp_c));
            setMaxTemp(roundOff(response.data.forecast.forecastday[0].day.maxtemp_c));
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.mainContent}>
                    <View>
                        <Text style={{ fontSize: 65, color: 'white', fontWeight: '500' }}>{temp}°</Text>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                            {status}
                        </Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', paddingTop: 15 }}>{location}<Icon name="location-pin" size={20} color="#fff" /></Text>
                        <Text style={{ color: 'white', fontSize: 15 }}>{maxTemp}°/{minTemp}° Feels like {feelsLike}°</Text>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <LottieView
                        autoPlay
                        source={require('../../assets/lottie/sun.json')}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red'
    },
    mainContent: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        margin: 20,
        // backgroundColor: 'blue',
        height: '75%'
    }
});
