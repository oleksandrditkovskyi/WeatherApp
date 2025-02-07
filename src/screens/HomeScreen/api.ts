import { api } from '@services/api';
import { ENDPOINTS } from '@services/api/endpoints';

export const getWeather5Days = async (lat: number, lon: number) => {
  const response = await api.get(
    ENDPOINTS.WEATHER.GET_WEATHER_5_DAYS(lat, lon),
    {
      params: {
        units: 'metric',
      },
    },
  );
  return response.data;
};
