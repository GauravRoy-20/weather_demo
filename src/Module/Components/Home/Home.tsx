import { useEffect, useState } from 'react';
import { Container, Row, Col, Toast } from 'react-bootstrap';
import WeatherCard from '../WeatherCard/WeatherCard';
import WeatherSearchForm from '../WeatherSearchForm/WeatherSearchForm';
import { useWeatherAPI } from '../../Services/ApiCalls';
import { HOURLY_FORECAST_ITEM } from '../../Types/ResponseTypes';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const onSearch = (query: string) => {
    setSearchQuery(query);
  };

  const {
    fetchWeatherData,
    weatherLoading,
    weatherData,
    weatherError,
    setWeatherError,

    fetchHourlyForecast,
    hourlyData,
    hourlyError,
    hourlyLoading,
  } = useWeatherAPI();

  useEffect(() => {
    if (searchQuery) {
      fetchWeatherData(searchQuery);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (weatherData?.coord?.lat && weatherData?.coord?.lon) {
      fetchHourlyForecast(weatherData?.coord?.lat, weatherData?.coord?.lon);
    }
  }, [weatherData?.coord?.lat, weatherData?.coord?.lon]);

  return (
    <Container>
      <Row className="my-3">
        <Col className="text-center">
          <h1>Weather App</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mb-3">
          <WeatherSearchForm onSearch={onSearch} />
        </Col>
      </Row>

      {(weatherError || hourlyError) && (
        <Toast
          show={true}
          onClose={() => setWeatherError(null)}
          delay={3000}
          autohide
          style={{
            position: 'fixed',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'red',
            color: 'white',
            zIndex: 9999,
          }}
        >
          <Toast.Body>{weatherError || hourlyError}</Toast.Body>
        </Toast>
      )}

      {searchQuery && (
        <Row className="justify-content-center mb-3">
          <Col xs={8} md={6} lg={4}>
            <WeatherCard weatherData={weatherData} loading={weatherLoading} />
          </Col>
        </Row>
      )}

      {searchQuery && (
        <div
          className="d-flex"
          style={{ overflowX: 'auto', marginBottom: '30px' }}
        >
          {hourlyData?.list?.map((forecast: HOURLY_FORECAST_ITEM, index) => (
            <div
              key={index}
              className="mx-2"
              style={{ minWidth: '300px', marginRight: '10px' }}
            >
              <WeatherCard forecast={forecast} loading={hourlyLoading} />
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Home;
