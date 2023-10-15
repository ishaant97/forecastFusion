import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';


export default function LiveLocation() {
    const [location, setLocation] = useState(null);
    const [city, setCity] = useState(null);

    useEffect(() => {
        getLocationAsync();
    }, []);

    const getLocationAsync = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            console.error('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);

        // Call the reverse geocoding API
        reverseGeocode(location.coords.latitude, location.coords.longitude);
    };

    const reverseGeocode = (latitude, longitude) => {
        // const geonamesUsername = 'ishaant_97'; // Replace with your Geonames username

        axios.get(`http://api.geonames.org/findNearbyPlaceNameJSON?lat=${latitude}&lng=${longitude}&username=ishaant_97 `)
            .then(response => {
                if (response.data && response.data.geonames.length > 0) {
                    const cityName = response.data.geonames[0].name;
                    setCity(cityName);
                }
            })
            .catch(error => {
                console.error('Error fetching location data:', error);
            });
    };
    return (
        <View>
            {location ? (
                <View>
                    <Text>Latitude: {location.coords.latitude}</Text>
                    <Text>Longitude: {location.coords.longitude}</Text>
                    {city && <Text>City: {city}</Text>}
                </View>
            ) : (
                <Text>No location data available</Text>
            )}
            <Button title="Get Location" onPress={getLocationAsync} />
        </View>
    );
}

