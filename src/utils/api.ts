import { api } from '@services/api';
import { ENDPOINTS } from '@services/api/endpoints';

export const getWeather = async (lat: number, lon: number) => {
  const response = await api.get(
    ENDPOINTS.WEATHER.GET_LOCATION_WEATHER(lat, lon),
    {
      params: {
        units: 'metric',
      },
    },
  );
  return response.data;
};

export const getCityWeather = async (city: string) => {
  const response = await api.get(ENDPOINTS.WEATHER.GET_CITY_WEATHER(city), {
    params: {
      units: 'metric',
    },
  });
  return response.data;
};
