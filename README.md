![React Native](https://img.shields.io/badge/React_Native-0.77-blue?logo=react)
# Weather App

<p align="center">
  <img src="/src/assets/images/readmeImg/1.png" width="16%">
  <img src="/src/assets/images/readmeImg/recording2.gif" width="16%">
  <img src="/src/assets/images/readmeImg/3.png" width="16%">
  <img src="/src/assets/images/readmeImg/4.png" width="16%">
  <img src="/src/assets/images/readmeImg/5.png" width="16%">
  <img src="/src/assets/images/readmeImg/6.png" width="16%">
</p>

## Overview

The Weather App is a mobile application built with React Native that provides users with real-time weather information and forecasts. The app leverages geolocation features to deliver localized weather data, allowing users to stay informed about the weather conditions in their area or any city of their choice. The application uses the OpenWeather API to fetch weather data.

## Features

- **Real-Time Weather Data**: Users can view current weather conditions, including temperature, humidity, wind speed, and weather descriptions.
- **5-Day Forecast**: The app provides a detailed 5-day weather forecast, helping users plan their activities accordingly.
- **Geolocation Support**: The app automatically detects the user's location to provide localized weather information. Users can also manually search for weather data in different cities.
- **User-Friendly Interface**: The application features a modern and intuitive user interface, making it easy to navigate and access weather information.
- **Data Storage**: User preferences and selected cities are stored locally, ensuring a personalized experience every time the app is launched.
- **Error Handling**: The app includes error handling mechanisms to manage API request failures and provide feedback to users.

## Technologies Used

- **React Native**: For building cross-platform mobile applications.
- **Zustand**: For state management.
- **Axios**: For making API requests to fetch weather data.
- **React Navigation**: For seamless navigation between different screens.
- **React Native Geolocation**: For accessing the device's location services.
- **TypeScript**: For type safety and improved developer experience.
- **OpenWeather API**: For retrieving weather data. <a href="https://openweathermap.org/" target="_blank">OpenWeather</a>

## Installation

To run the Weather App locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/oleksandrditkovskyi/WeatherApp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd WeatherApp
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```
   
   While developing for iOS, make sure to install pods first before running the app:

   ```bash
   cd ios && pod install && cd ..
   ```

4. Add .env file:

   ```bash
   BASE_URL=https://api.openweathermap.org/data/2.5/
   API_KEY=youAPIKey
   ```

4. Run the application:
   ```bash
   npm start
   ```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
