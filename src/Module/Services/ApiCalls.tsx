import axios from 'axios';
import { useState } from 'react';
import {
  HOURLY_FORECAST_RESPONE,
  WEATHER_DATA_RESPONSE,
} from '../Types/ResponseTypes';

export const useWeatherAPI = () => {
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WEATHER_DATA_RESPONSE | null>(
    null,
  );
  const [weatherError, setWeatherError] = useState<string | null>(null);

  const [hourlyLoading, setHourlyLoading] = useState(false);
  const [hourlyData, setHourlyData] = useState<
    HOURLY_FORECAST_RESPONE | undefined
  >(undefined);
  const [hourlyError, setHourlyError] = useState<string | null>(null);

  const fetchWeatherData = async (query: string) => {
    setWeatherLoading(true);
    try {
      const response = await axios.get<WEATHER_DATA_RESPONSE>(
        `${process.env.REACT_APP_API_BASE_URL_OPEN_WEATHER}data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_API_KEY_OPEN_WEATHER}&units=metric`,
      );
      setWeatherData(response.data);
      setWeatherError(null);
    } catch (error) {
      setWeatherError('Location not found. Please try again.');
      console.error('Error fetching weather data:', error);
    } finally {
      setWeatherLoading(false);
    }
  };

  const fetchHourlyForecast = async (lat: number, lon: number) => {
    setHourlyLoading(true);
    try {
      const response = await axios.get<HOURLY_FORECAST_RESPONE>(
        `${process.env.REACT_APP_API_BASE_URL_OPEN_WEATHER}data/2.5/forecast?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&appid=${process.env.REACT_APP_API_KEY_OPEN_WEATHER}&units=metric`,
      );
      setHourlyData(response.data);
      setHourlyError(null);
    } catch (error) {
      setHourlyError('Error fetching hourly forecast. Please try again.');
      console.error('Error fetching hourly forecast:', error);
    } finally {
      setHourlyLoading(false);
    }
  };

  return {
    weatherLoading,
    weatherData,
    weatherError,
    setWeatherError,
    hourlyLoading,
    hourlyData,
    hourlyError,
    fetchWeatherData,
    fetchHourlyForecast,
  };
};
