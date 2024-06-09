import React from 'react';
import { Card } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { FORCAST_CARD_COLORS } from '../../Constants/Colors';
import {
  HOURLY_FORECAST_ITEM,
  WEATHER_DATA_RESPONSE,
} from '../../Types/ResponseTypes';

type WeatherCardProps = {
  weatherData?: WEATHER_DATA_RESPONSE | null;
  loading: boolean;
  forecast?: HOURLY_FORECAST_ITEM;
};

const WeatherCard = (props: WeatherCardProps) => {
  const { loading, weatherData, forecast } = props;
  return (
    <Card className="shadow" style={{ minWidth: '300px' }}>
      <Card.Body>
        {loading ? (
          <Skeleton height={150} />
        ) : (
          (weatherData || forecast) && (
            <Card.Body
              style={{
                backgroundColor:
                  FORCAST_CARD_COLORS?.filter(
                    (item) =>
                      item?.label ===
                      (weatherData || forecast)?.weather[0]?.description,
                  )[0]?.value ?? '#ffffff',
              }}
            >
              {weatherData && (
                <Card.Title className="text-center">
                  {weatherData?.name}
                </Card.Title>
              )}
              {forecast && (
                <Card.Title className="text-center">
                  Time:{' '}
                  {new Date(forecast?.dt * 1000).toLocaleString([], {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true,
                  })}
                </Card.Title>
              )}
              <Card.Text className="text-center text-capitalize">
                {loading ? (
                  <>
                    <Skeleton height={20} width={100} />
                    <Skeleton height={20} width={100} />
                    <Skeleton height={20} width={100} />
                    <Skeleton height={20} width={100} />
                    <Skeleton height={20} width={100} />
                  </>
                ) : (
                  <>
                    Temperature: {(weatherData || forecast)?.main.temp}°C
                    <br />
                    Feels like: {(weatherData || forecast)?.main?.feels_like}
                    °C
                    <br />
                    Humidity: {(weatherData || forecast)?.main.humidity}%
                    <br />
                    Wind Speed: {(weatherData || forecast)?.wind.speed} m/s
                    <br />
                    Description:{' '}
                    {(weatherData || forecast)?.weather[0].description}
                    <div className="text-center">
                      <img
                        src={`${process.env.REACT_APP_IMAGE_BASE_URL_OPEN_WEATHER}${(weatherData || forecast)?.weather[0]?.icon}.png`}
                        height={'80px'}
                        width={'80px'}
                        alt={(weatherData || forecast)?.weather[0].description}
                      />
                    </div>
                  </>
                )}
              </Card.Text>
            </Card.Body>
          )
        )}
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
