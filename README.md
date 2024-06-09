# Weather Demo

This is a simple weather demo project built with React. It allows users to search for weather information for a specific location and view hourly forecasts.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/weather-demo.git
   ```

2. Navigate into the project directory:

   ```bash
   cd weather-demo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.dev` file in the root directory and add the following environment variables:

   ```plaintext
   REACT_APP_API_BASE_URL_OPEN_WEATHER="https://api.openweathermap.org/"
   REACT_APP_API_KEY_OPEN_WEATHER=your_openweather_api_key_here
   REACT_APP_IMAGE_BASE_URL_OPEN_WEATHER="http://openweathermap.org/img/w/"


5. Start the development server:

   ```bash
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage

- Enter a location in the search bar and click "Search" to fetch weather information.
- View hourly forecasts by scrolling through the cards below the current weather.

## Technologies Used

- React
- Axios
- React Bootstrap
- dotenv
- TypeScript

## Acknowledgements

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

