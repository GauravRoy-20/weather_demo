export type WEATHER_DATA_RESPONSE = {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: { id: number; main: string; description: string; icon: string }[];
  wind: { speed: number; deg: number };
};

export type HOURLY_FORECAST_ITEM = {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  };
  pop: number;
  sys: { pod: string };
  visibility: number;
  weather: { id: number; main: string; description: string; icon: string }[];
  wind: { speed: number; deg: number; gust: number };
};

export type HOURLY_FORECAST_RESPONE = {
  cnt: number;
  cod: string;
  city: {
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  list: HOURLY_FORECAST_ITEM[];
};
