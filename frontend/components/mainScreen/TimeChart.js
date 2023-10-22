import { StyleSheet, ScrollView, Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import data from '../../data';
import { useContext, useEffect, useState } from 'react';
import { LocationContext } from '../../context/Location';
import axios from 'axios';

const newComponent = (array) => {
    const roundOff = (num) => {
        return Math.round(num);
    }
    return (
        array.forecast.forecastday[0].hour.map((item, index) => {
            const datetimeString = item.time;
            const timePart = datetimeString.split(' ')[1];

            return (
                <View style={styles.dayForecastItem} key={index}>
                    {/* <Icon name="sun" size={25} color="orange" /> */}
                    <Image source={{ uri: item.condition.icon }} />
                    <Text style={{ color: 'white', fontSize: 13 }}>{timePart}</Text>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{roundOff(item.temp_c)}°</Text>
                </View>
            )
        })
    )
}

export default function TimeChart() {
    const { location } = useContext(LocationContext);
    const [array, setArray] = useState(null);

    useEffect(() => {
        getInfo();
    }, []
    )

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
            setArray(response.data);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {array ? newComponent(array) : <Text>Loading...</Text>}
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dayForecastItem: {
        backgroundColor: '#6a8488',
        // marginTop: 15,
        padding: 8,
        alignItems: 'center',
        gap: 10,
        borderRadius: 18,
        marginRight: 15
    }
});
