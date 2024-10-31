import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet,Image,  useWindowDimensions } from 'react-native';
import {  useLocalSearchParams } from 'expo-router';
import { theme } from '../theme';
import { getWeatherImage } from '../components/condition';
import { imageStyles } from '../components/imageStyles';




type WeatherData = {
  location: { name: string; country: string };
  current: { temp_c: number; condition: { text: string; icon: string } };
};

export default function WeatherScreen (){

  const { city } = useLocalSearchParams();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  
 

  useEffect(() => {
    if (city) fetchWeather();
    }, [city]);

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=c91b99fd3783411dad1153914243010&q=${city}`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

 

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={theme.colorDrakBlue} />
      </View>
    );
  }

  if (!weather) {
    return (
      <View style={styles.container}>
        <Text>No weather data available</Text>
      </View>
    );
  }

 

  return (
    <View style={styles.container}>
    <Image source={getWeatherImage(weather.current.condition.text,weather.current.temp_c)} style={imageStyles.images} />
      <Text style={styles.cityName}>
        {weather.location.name}, {weather.location.country}
      </Text>
      <Text style={styles.temperature}>{weather.current.temp_c}°C</Text>
      <Text style={styles.condition}>{weather.current.condition.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
     flex: 1, 
     justifyContent: 'center',
     alignItems: 'center' ,
     backgroundColor:theme.colorBlue
    },
  loading: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  cityName: { 
    fontSize:32,
     fontWeight: 'bold' 
    },
  temperature: {
     fontSize: 36,
     fontWeight: 'bold', 
     marginVertical: 10 
    },
  condition: {
     fontSize: 28, 
     color: theme.colorGrey 
    },
   
    
});



