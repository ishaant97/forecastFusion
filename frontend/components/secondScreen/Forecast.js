import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon2 from 'react-native-vector-icons/Feather';
import { Ionicons } from '@expo/vector-icons';
import { useContext, useEffect, useState } from 'react';
import { LocationContext } from '../../context/Location';
import axios from 'axios';


export default function Forecast() {
    const { location } = useContext(LocationContext);
    const [yesterdayHumidity, setYesterdayHumidity] = useState(null);
    const [yesterdayIcon, setYesterdayIcon] = useState(null);
    const [yesterdayMaxTemp, setYesterdayMaxTemp] = useState(null);
    const [yesterdayMinTemp, setYesterdayMinTemp] = useState(null);
    const [todayHumidity, setTodayHumidity] = useState(null);
    const [todayIcon, setTodayIcon] = useState(null);
    const [todayMaxTemp, setTodayMaxTemp] = useState(null);
    const [todayMinTemp, setTodayMinTemp] = useState(null);
    const [tomorrowHumidity, setTomorrowHumidity] = useState(null);
    const [tomorrowIcon, setTomorrowIcon] = useState(null);
    const [tomorrowMaxTemp, setTomorrowMaxTemp] = useState(null);
    const [tomorrowMinTemp, setTomorrowMinTemp] = useState(null);
    const [dayAfterTomorrowHumidity, setDayAfterTomorrowHumidity] = useState(null);
    const [dayAfterTomorrowIcon, setDayAfterTomorrowIcon] = useState(null);
    const [dayAfterTomorrowMaxTemp, setDayAfterTomorrowMaxTemp] = useState(null);
    const [dayAfterTomorrowMinTemp, setDayAfterTomorrowMinTemp] = useState(null);

    useEffect(() => {
        getInfoOfYesterday();
        getInfo();
    }, []
    )

    const roundOff = (num) => {
        return Math.round(num);
    }

    const yesterdayDate = getYesterdayDate();

    const getInfoOfYesterday = async () => {
        // getLocation();
        const options = {
            method: 'GET',
            url: process.env.EXPO_PUBLIC_API_URL,
            params: {
                q: `${location}`,
                dt: `${yesterdayDate}`,
                lang: 'en'
            },
            headers: {
                'X-RapidAPI-Key': process.env.EXPO_PUBLIC_API_KEY,
                'X-RapidAPI-Host': process.env.EXPO_PUBLIC_API_HOST
            }
        };

        try {
            const response = await axios.request(options);
            // console.log(response.data);
            setYesterdayHumidity(response.data.forecast.forecastday[0].day.avghumidity);
            setYesterdayIcon(response.data.forecast.forecastday[0].day.condition.icon);
            setYesterdayMaxTemp(roundOff(response.data.forecast.forecastday[0].day.maxtemp_c));
            setYesterdayMinTemp(roundOff(response.data.forecast.forecastday[0].day.mintemp_c));
        } catch (error) {
            console.error(error);
        }
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
            setTodayHumidity(response.data.forecast.forecastday[0].day.avghumidity);
            setTodayIcon(response.data.forecast.forecastday[0].day.condition.icon);
            setTodayMaxTemp(roundOff(response.data.forecast.forecastday[0].day.maxtemp_c));
            setTodayMinTemp(roundOff(response.data.forecast.forecastday[0].day.mintemp_c));
            setTomorrowHumidity(response.data.forecast.forecastday[1].day.avghumidity);
            setTomorrowIcon(response.data.forecast.forecastday[1].day.condition.icon);
            setTomorrowMaxTemp(roundOff(response.data.forecast.forecastday[1].day.maxtemp_c));
            setTomorrowMinTemp(roundOff(response.data.forecast.forecastday[1].day.mintemp_c));
            setDayAfterTomorrowHumidity(response.data.forecast.forecastday[2].day.avghumidity);
            setDayAfterTomorrowIcon(response.data.forecast.forecastday[2].day.condition.icon);
            setDayAfterTomorrowMaxTemp(roundOff(response.data.forecast.forecastday[2].day.maxtemp_c));
            setDayAfterTomorrowMinTemp(roundOff(response.data.forecast.forecastday[2].day.mintemp_c));
        } catch (error) {
            console.error(error);
        }
    }


    function getYesterdayDate() {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        const year = yesterday.getFullYear();
        const month = String(yesterday.getMonth() + 1).padStart(2, '0');
        const day = String(yesterday.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    function getDayAfterTomorrow() {
        const today = new Date();
        const dayAfterTomorrow = new Date(today);
        dayAfterTomorrow.setDate(today.getDate() + 2);

        // The getDay() method returns the day of the week (0 = Sunday, 1 = Monday, ... 6 = Saturday).
        const dayIndex = dayAfterTomorrow.getDay();
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return daysOfWeek[dayIndex];
    }

    const dayOfDayAfterTomorrow = getDayAfterTomorrow();


    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 7 }}>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Yesterday</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                    <Text style={{ color: 'lightblue', fontSize: 18, fontWeight: 'bold' }}><Ionicons name="ios-water" size={24} color="white" />{yesterdayHumidity}%</Text>
                    <Image source={{ uri: 'https:' + yesterdayIcon }} style={{ width: 35, height: 35 }} />
                    {/* <Icon2 name="sun" size={20} color="orange" /> */}
                    {/* <Icon2 name="sun" size={20} color="orange" /> */}
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{yesterdayMaxTemp}°</Text>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{yesterdayMinTemp}°</Text>
                </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 7 }}>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Today</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                    <Text style={{ color: 'lightblue', fontSize: 18, fontWeight: 'bold' }}><Ionicons name="ios-water" size={24} color="white" />{todayHumidity}%</Text>
                    <Image source={{ uri: 'https:' + todayIcon }} style={{ width: 35, height: 35 }} />
                    {/* <Icon2 name="sun" size={20} color="orange" /> */}
                    {/* <Icon2 name="sun" size={20} color="orange" /> */}
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{todayMaxTemp}°</Text>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{todayMinTemp}°</Text>
                </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 7 }}>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Tomorrow</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                    <Text style={{ color: 'lightblue', fontSize: 18, fontWeight: 'bold' }}><Ionicons name="ios-water" size={24} color="white" />{tomorrowHumidity}%</Text>
                    <Image source={{ uri: 'https:' + tomorrowIcon }} style={{ width: 35, height: 35 }} />
                    {/* <Icon2 name="sun" size={20} color="orange" /> */}
                    {/* <Icon2 name="sun" size={20} color="orange" /> */}
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{tomorrowMaxTemp}°</Text>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{tomorrowMinTemp}°</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 7 }}>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{dayOfDayAfterTomorrow}</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                    <Text style={{ color: 'lightblue', fontSize: 18, fontWeight: 'bold' }}><Ionicons name="ios-water" size={24} color="white" />{dayAfterTomorrowHumidity}%</Text>
                    <Image source={{ uri: 'https:' + dayAfterTomorrowIcon }} style={{ width: 35, height: 35 }} />
                    {/* <Icon2 name="sun" size={20} color="orange" /> */}
                    {/* <Icon2 name="sun" size={20} color="orange" /> */}
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{dayAfterTomorrowMaxTemp}°</Text>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{dayAfterTomorrowMinTemp}°</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // rowGap: 50
    },
});
