import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Pressable} from 'react-native';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';

const SearchScreen = ({
  route: {
    params: {coordinate = null, location = null},
  },
  navigation,
}) => {
  const [forecastList, setForecastList] = useState([]);
  const [searchString, setSearchString] = useState('');

  //received new coordinate when clicked marker
  // useEffect(() => {
  //   console.log('effect');
  //   const {latitude, longitude} = coordinate;

  //   const fetchData = async () => {
  //     const result = await axios(
  //       `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=13e6eb3cdf8a03fd71534712501f06f8`,
  //     );

  //     console.log(result.data);

  //     setSearchString(location);
  //   };

  //   fetchData();
  // }, [coordinate]);

  // useEffect(() => {
  //   let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate.latitude}&lon=${coordinate.longitude}&%20exclude={part}&appid=0c0d60691e2d42da75db8e266a8ec880`;
  //   const data = getWeatherByCoordinates(coordinate);
  //   // setSearchString(data.current.clouds);
  // }, [setSearchString, coordinate]);
  // useEffect(() => {
  //   let url = `https://api.openweathermap.org/data/2.5/onecall?lat=50.4501&lon=30.5234&exclude=hourly,minutely&appid=13e6eb3cdf8a03fd71534712501f06f8`;
  //   let data;
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'https://hn.algolia.com/api/v1/search?query=redux',
  //     );
  //     setData(result.data);
  //   };
  //   const fetch = async()=>{
  //     const response= await axios
  //     .get(url)
  //     .then((response) => {
  //       console.log(response.data);
  //       data = response.data;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  //   console.log('coordinate effect');
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       console.log(response.data);
  //       data = response.data;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   setSearchString(data.current.clouds);
  // }, [coordinate]);
  // useEffect(() => {
  //   let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate.latitude}&lon=${coordinate.longitude}exclude={hourly}&appid=0c0d60691e2d42da75db8e266a8ec880`;
  //   let data;
  //   console.log('coordinate effect');
  //   // axios
  //   //   .get(url)
  //   //   .then((response) => {
  //   //     console.log(response.data);
  //   //     result = response.data;
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //   });
  //   // setSearchString(data.current.clouds);
  // });
  // const getWeatherByCoordinates = async ({latitude, longitude}) => {
  //   return await axios
  //     .get(
  //       `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&%20exclude={part}&appid=0c0d60691e2d42da75db8e266a8ec880`,
  //     )
  //     .then((response) => {
  //       console.log(response.data);

  //       return response.data;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const handleSearchBtn = async () => {
    // if (searchString.trim() === '') {
    //   return;
    // }
    // let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchString}&appid=0c0d60691e2d42da75db8e266a8ec880`;
    // const data = (await axios(url)).data;
    // console.log(data, 'data');
    // const result = await axios(
    //   `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=hourly,minutely&appid=13e6eb3cdf8a03fd71534712501f06f8`,
    // );
    // console.log(result.data, 'forecast');
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

const arr = {
  current: {
    clouds: 62,
    dew_point: 289.48,
    dt: 1597089708,
    feels_like: 292.64,
    humidity: 82,
    pressure: 1016,
    sunrise: 1597027158,
    sunset: 1597080438,
    temp: 292.63,
    uvi: 6.3,
    visibility: 10000,
    weather: [[Object]],
    wind_deg: 320,
    wind_speed: 3,
  },
  daily: [
    {
      clouds: 62,
      dew_point: 289.48,
      dt: 1597053600,
      feels_like: [Object],
      humidity: 82,
      pop: 0.78,
      pressure: 1016,
      rain: 2.15,
      sunrise: 1597027158,
      sunset: 1597080438,
      temp: [Object],
      uvi: 6.3,
      weather: [Array],
      wind_deg: 42,
      wind_speed: 2.01,
    },
    {
      clouds: 0,
      dew_point: 288.07,
      dt: 1597140000,
      feels_like: [Object],
      humidity: 51,
      pop: 0.89,
      pressure: 1015,
      rain: 0.8,
      sunrise: 1597113649,
      sunset: 1597166730,
      temp: [Object],
      uvi: 5.9,
      weather: [Array],
      wind_deg: 345,
      wind_speed: 2.92,
    },
    {
      clouds: 0,
      dew_point: 282.43,
      dt: 1597226400,
      feels_like: [Object],
      humidity: 48,
      pop: 0,
      pressure: 1018,
      sunrise: 1597200140,
      sunset: 1597253021,
      temp: [Object],
      uvi: 5.96,
      weather: [Array],
      wind_deg: 4,
      wind_speed: 4.65,
    },
    {
      clouds: 0,
      dew_point: 282.3,
      dt: 1597312800,
      feels_like: [Object],
      humidity: 47,
      pop: 0.2,
      pressure: 1019,
      rain: 0.13,
      sunrise: 1597286631,
      sunset: 1597339310,
      temp: [Object],
      uvi: 5.65,
      weather: [Array],
      wind_deg: 333,
      wind_speed: 3.14,
    },
    {
      clouds: 20,
      dew_point: 281.94,
      dt: 1597399200,
      feels_like: [Object],
      humidity: 50,
      pop: 0,
      pressure: 1020,
      sunrise: 1597373122,
      sunset: 1597425598,
      temp: [Object],
      uvi: 5.82,
      weather: [Array],
      wind_deg: 15,
      wind_speed: 3.05,
    },
    {
      clouds: 70,
      dew_point: 281.31,
      dt: 1597485600,
      feels_like: [Object],
      humidity: 42,
      pop: 0,
      pressure: 1018,
      sunrise: 1597459613,
      sunset: 1597511884,
      temp: [Object],
      uvi: 5.77,
      weather: [Array],
      wind_deg: 109,
      wind_speed: 2.03,
    },
    {
      clouds: 100,
      dew_point: 282.32,
      dt: 1597572000,
      feels_like: [Object],
      humidity: 52,
      pop: 0.32,
      pressure: 1015,
      sunrise: 1597546105,
      sunset: 1597598170,
      temp: [Object],
      uvi: 5.54,
      weather: [Array],
      wind_deg: 63,
      wind_speed: 1.36,
    },
    {
      clouds: 21,
      dew_point: 286.74,
      dt: 1597658400,
      feels_like: [Object],
      humidity: 62,
      pop: 0.75,
      pressure: 1015,
      rain: 9.68,
      sunrise: 1597632596,
      sunset: 1597684454,
      temp: [Object],
      uvi: 5.18,
      weather: [Array],
      wind_deg: 65,
      wind_speed: 3.75,
    },
  ],
  lat: 50.45,
  lon: 30.52,
  timezone: 'Europe/Kiev',
  timezone_offset: 10800,
};
