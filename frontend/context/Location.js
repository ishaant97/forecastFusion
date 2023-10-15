import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import * as Location from 'expo-location';

const LocationContext = createContext();

const LocationProvider = ({ children }) => {

    const [location, setLocation] = useState(null);
    // const [city, setCity] = useState(null);
    // const [lat, setLat] = useState(null);
    // const [long, setLong] = useState(null);

    useEffect(() => {
        getLocation();
    }, []);

    async function getLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            console.error('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});

        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: { q: `${location.coords.latitude},${location.coords.longitude}` },
            headers: {
                'X-RapidAPI-Key': '3962322a1amshbf868885feddf98p100253jsnc699c8ec37ff',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            // console.warn(response.data);
            setLocation(response.data.location.name);
        } catch (error) {
            console.error(error);
        }

        // Call the reverse geocoding API
        // reverseGeocode(location.coords.latitude, location.coords.longitude);
    };


    // const reverseGeocode = (latitude, longitude) => {
    //     // const geonamesUsername = 'ishaant_97';

    //     axios.get(`http://api.geonames.org/findNearbyPlaceNameJSON?lat=${latitude}&lng=${longitude}&username=ishaant_97 `)
    //         .then(response => {
    //             if (response.data && response.data.geonames.length > 0) {
    //                 const cityName = response.data.geonames[0].name;
    //                 setCity(cityName);
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error fetching location data:', error);
    //         });
    // };

    return (
        <LocationContext.Provider value={{ location }}>
            {children}
        </LocationContext.Provider>
    );
};

export { LocationContext, LocationProvider };