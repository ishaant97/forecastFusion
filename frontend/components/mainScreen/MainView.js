import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useContext, useEffect, useState } from 'react';
import { LocationContext } from '../../context/Location';
import axios from 'axios';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

export default function MainView({ navigation }) {
    const { location } = useContext(LocationContext);
    // const [location, setLocation] = useState(null);
    const [temp, setTemp] = useState(null);
    const [status, setStatus] = useState(null);
    const [statusIcon, setStatusIcon] = useState(null);
    const [feelsLike, setFeelsLike] = useState(null);
    const [minTemp, setMinTemp] = useState(null);
    const [maxTemp, setMaxTemp] = useState(null);
    const [region, setRegion] = useState(null);

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
            url: `http://192.168.0.102:8000/get/forecast/${location}`,
            // params: {
            //     q: `${location}`, 
            //     days: '3'
            // },
            // headers: {
            //     'X-RapidAPI-Key': process.env.EXPO_PUBLIC_API_KEY,
            //     'X-RapidAPI-Host': process.env.EXPO_PUBLIC_API_HOST
            // }
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
            setRegion(response.data.location.region);
        } catch (error) {
            console.error(error);
        }
    }
    function getTodayDateAndDay() {
        const today = new Date();
        // Define options for formatting the date
        const options = {
            weekday: "short",
            month: "long",
            day: "numeric"
        };
        // Format the date using the options
        const formattedDate = today.toLocaleString("en-US", options);
        return formattedDate;
    }
    const dayAndDate = getTodayDateAndDay();
    return (
        <View style={styles.container}>
            <View style={styles.Location}>
                <EvilIcons name="location" size={24} color="white" />
                <Text style={{ color: 'white' }}>{location},{region}</Text>
                <TouchableOpacity>
                    <AntDesign name="down" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 18, color: 'white' }}>Today</Text>
                <Text style={{ color: 'white' }}>{dayAndDate}</Text>
            </View>
            <View style={{ flex: 10 }}>
                <View style={{ flex: 1 }}>
                    <LottieView
                        autoPlay
                        source={require('../../assets/lottie/sun.json')}
                    />
                </View>
                <View style={styles.mainContent}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 85, color: 'white', fontWeight: '500' }}>{temp}°</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                        {/* <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', paddingTop: 15 }}>{location}<Icon name="location-pin" size={20} color="#fff" /></Text> */}
                        <View>
                            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
                                {status}
                            </Text>
                            <Text style={{ color: 'white', fontSize: 18 }}>{maxTemp}°/{minTemp}° Feels like {feelsLike}°</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', borderRadius: 10 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Second')}>
                                <MaterialIcons name="arrow-forward-ios" size={30} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
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
        // alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20,
        // backgroundColor: 'blue',
        height: '75%'
    },
    Location: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
