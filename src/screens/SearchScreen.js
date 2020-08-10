import React, {useState} from 'react';
import {Text, View, TextInput, Pressable} from 'react-native';
import axios from 'axios';

const SearchScreen = () => {
  const [forecastList, setForecastList] = useState([]);
  const [searchString, setSearchString] = useState('');

  const handleSearchBtn = () => {
    // let url = `http://api.weatherstack.com/forecast?access_key=a0511487d6eb5967bad5b78dc1525142&query=${searchString}&forecast_days=7&hourly=24`;
    let url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${searchString}&cnt=${7}&appid=0c0d60691e2d42da75db8e266a8ec880`;

    // Requesthttp://api.weatherstack.com/forecast
    // ? access_key = YOUR_ACCESS_KEY
    // & query = New York
    // & forecast_days = 1
    // & hourly = 1

    axios(
      'https://climacell-microweather-v1.p.rapidapi.com/weather/forecast/hourly?fields=precipitation&unit_system=si&lat=42.8237618&lon=-71.2216286',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'climacell-microweather-v1.p.rapidapi.com',
          'x-rapidapi-key':
            '266dc4ea45mshe74a1a9798d796bp155a49jsn97e0e8574ae5',
        },
      },
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    // axios.get(url)
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => console.log(err))
  };

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          onChangeText={(val) => setSearchString(val)}
          placeholder="Type city name"
          value={searchString}
          style={{flexGrow: 1}}
        />
        <Pressable onPress={handleSearchBtn} style={{backgroundColor: 'red'}}>
          <Text>Search</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SearchScreen;

const ar = {
  lat: 50.45,
  lon: 30.52,
  timezone: 'Europe/Kiev',
  timezone_offset: 10800,
  current: {
    dt: 1597056002,
    sunrise: 1597027158,
    sunset: 1597080438,
    temp: 296.49,
    feels_like: 298.66,
    pressure: 1016,
    humidity: 83,
    dew_point: 293.44,
    uvi: 6.3,
    clouds: 20,
    visibility: 10000,
    wind_speed: 2.38,
    wind_deg: 41,
    weather: [{id: 500, main: 'Rain', description: 'light rain', icon: '10d'}],
    rain: {'1h': 0.18},
  },
  daily: [
    {
      dt: 1597053600,
      sunrise: 1597027158,
      sunset: 1597080438,
      temp: {
        day: 296.49,
        min: 293.67,
        max: 298.9,
        night: 293.67,
        eve: 298.9,
        morn: 296.49,
      },
      feels_like: {day: 298.72, night: 293.52, eve: 299.32, morn: 298.72},
      pressure: 1016,
      humidity: 83,
      dew_point: 293.44,
      wind_speed: 2.29,
      wind_deg: 34,
      weather: [
        {id: 501, main: 'Rain', description: 'moderate rain', icon: '10d'},
      ],
      clouds: 20,
      pop: 0.97,
      rain: 3.89,
      uvi: 6.3,
    },
    {
      dt: 1597140000,
      sunrise: 1597113649,
      sunset: 1597166730,
      temp: {
        day: 298.96,
        min: 291.5,
        max: 301.36,
        night: 292.69,
        eve: 300.46,
        morn: 291.5,
      },
      feels_like: {day: 298.51, night: 291.21, eve: 299.59, morn: 291.64},
      pressure: 1015,
      humidity: 50,
      dew_point: 287.8,
      wind_speed: 2.74,
      wind_deg: 347,
      weather: [
        {id: 501, main: 'Rain', description: 'moderate rain', icon: '10d'},
      ],
      clouds: 0,
      pop: 0.88,
      rain: 3.32,
      uvi: 5.9,
    },
    {
      dt: 1597226400,
      sunrise: 1597200140,
      sunset: 1597253021,
      temp: {
        day: 292.71,
        min: 287.71,
        max: 294.45,
        night: 288.78,
        eve: 292.91,
        morn: 287.71,
      },
      feels_like: {day: 288.94, night: 286.42, eve: 289.26, morn: 284.7},
      pressure: 1018,
      humidity: 47,
      dew_point: 281.16,
      wind_speed: 4.7,
      wind_deg: 6,
      weather: [
        {id: 800, main: 'Clear', description: 'clear sky', icon: '01d'},
      ],
      clouds: 0,
      pop: 0,
      uvi: 5.96,
    },
    {
      dt: 1597312800,
      sunrise: 1597286631,
      sunset: 1597339310,
      temp: {
        day: 291.52,
        min: 286.54,
        max: 292.04,
        night: 288.15,
        eve: 292.04,
        morn: 286.54,
      },
      feels_like: {day: 288.38, night: 285.8, eve: 288.54, morn: 284.64},
      pressure: 1019,
      humidity: 49,
      dew_point: 280.64,
      wind_speed: 3.64,
      wind_deg: 357,
      weather: [
        {id: 500, main: 'Rain', description: 'light rain', icon: '10d'},
      ],
      clouds: 88,
      pop: 0.25,
      rain: 0.31,
      uvi: 5.65,
    },
    {
      dt: 1597399200,
      sunrise: 1597373122,
      sunset: 1597425598,
      temp: {
        day: 292.56,
        min: 286.15,
        max: 294.55,
        night: 290.02,
        eve: 294.36,
        morn: 286.15,
      },
      feels_like: {day: 290.25, night: 288.02, eve: 292.39, morn: 284.23},
      pressure: 1020,
      humidity: 45,
      dew_point: 280.43,
      wind_speed: 2.36,
      wind_deg: 23,
      weather: [
        {id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d'},
      ],
      clouds: 52,
      pop: 0,
      uvi: 5.82,
    },
    {
      dt: 1597485600,
      sunrise: 1597459613,
      sunset: 1597511884,
      temp: {
        day: 295.79,
        min: 287.8,
        max: 297.68,
        night: 291.28,
        eve: 297.11,
        morn: 287.8,
      },
      feels_like: {day: 293.92, night: 289.15, eve: 294.86, morn: 285.95},
      pressure: 1017,
      humidity: 40,
      dew_point: 281.8,
      wind_speed: 2.13,
      wind_deg: 194,
      weather: [
        {id: 800, main: 'Clear', description: 'clear sky', icon: '01d'},
      ],
      clouds: 0,
      pop: 0,
      uvi: 5.77,
    },
    {
      dt: 1597572000,
      sunrise: 1597546105,
      sunset: 1597598170,
      temp: {
        day: 293.9,
        min: 290.62,
        max: 294.94,
        night: 290.95,
        eve: 294.91,
        morn: 290.72,
      },
      feels_like: {day: 292.69, night: 290.68, eve: 293.66, morn: 288.11},
      pressure: 1013,
      humidity: 58,
      dew_point: 285.55,
      wind_speed: 2.69,
      wind_deg: 165,
      weather: [
        {id: 500, main: 'Rain', description: 'light rain', icon: '10d'},
      ],
      clouds: 100,
      pop: 0.7,
      rain: 0.9,
      uvi: 5.54,
    },
    {
      dt: 1597658400,
      sunrise: 1597632596,
      sunset: 1597684454,
      temp: {
        day: 293.95,
        min: 288.7,
        max: 295.78,
        night: 289.66,
        eve: 294.87,
        morn: 288.7,
      },
      feels_like: {day: 291.47, night: 287.63, eve: 291.31, morn: 288.3},
      pressure: 1015,
      humidity: 60,
      dew_point: 286.15,
      wind_speed: 4.76,
      wind_deg: 38,
      weather: [
        {id: 501, main: 'Rain', description: 'moderate rain', icon: '10d'},
      ],
      clouds: 1,
      pop: 0.99,
      rain: 6.08,
      uvi: 5.18,
    },
  ],
};
