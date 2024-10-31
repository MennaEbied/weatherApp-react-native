import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

type WeatherData = {
  location: { name: string; country: string };
  current: { temp_c: number; condition: { text: string; icon: string } };
};

const WeatherScreen = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const { city } = useLocalSearchParams();
  const router = useRouter();

  useEffect(() => {
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

    if (city) fetchWeather();
  }, [city]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
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
      <Text style={styles.cityName}>
        {weather.location.name}, {weather.location.country}
      </Text>
      <Text style={styles.temperature}>{weather.current.temp_c}°C</Text>
      <Text style={styles.condition}>{weather.current.condition.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  cityName: { fontSize: 24, fontWeight: 'bold' },
  temperature: { fontSize: 32, fontWeight: 'bold', marginVertical: 10 },
  condition: { fontSize: 18, color: '#555' },
});

export default WeatherScreen;
