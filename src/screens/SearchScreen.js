import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Pressable, ScrollView} from 'react-native';
import axios from 'axios';
import WeatherDetail from '../components/weather-detail/WeatherDetail';

const SearchScreen = ({route, navigation}) => {
  const [forecastList, setForecastList] = useState([]);
  const [searchString, setSearchString] = useState('');

  //received new coordinate when clicked marker
  useEffect(() => {
    console.log('effect');
    if (route.params?.coordinate) {
      const {latitude, longitude} = route.params.coordinate;
      const location = route.params.location;
      setSearchString(location);

      const fetchData = async () => {
        const result = await axios(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=13e6eb3cdf8a03fd71534712501f06f8`,
        );

        // console.log(result.data);
      };

      fetchData();
    }
  }, [route.params?.coordinate]);

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
    if (searchString.trim() === '') {
      return;
    }

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchString}&appid=0c0d60691e2d42da75db8e266a8ec880`;
    const data = (await axios(url)).data;
    // console.log(data, 'data');

    const result = await axios(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly,minutely&units=metric&appid=13e6eb3cdf8a03fd71534712501f06f8`,
    );
    console.log(result.data, 'forecast');

    setForecastList(result.data.daily);
  };

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, flexGrow: 1}}>
          <TextInput
            onChangeText={(val) => setSearchString(val)}
            placeholder="Type city name"
            value={searchString}
          />
        </View>
        <Pressable onPress={handleSearchBtn} style={{backgroundColor: 'red'}}>
          <Text>Search</Text>
        </Pressable>
      </View>
      <ScrollView>
        {forecastList.map((item) => {
          return <WeatherDetail day="Понедельник" />;
        })}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
