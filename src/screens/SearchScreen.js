import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Pressable, ScrollView} from 'react-native';
import axios from 'axios';
import moment from 'moment';
import WeatherDetail from '../components/weather-detail/WeatherDetail';
import {OPENWEATHER_APIKEY} from '../helpers/constants';

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
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${OPENWEATHER_APIKEY}`,
        );

        setForecastList(result.data.daily);
      };

      fetchData();
    }
  }, [route.params?.coordinate]);

  //enter button search
  const handleSearchBtn = async () => {
    if (searchString.trim() === '') {
      return;
    }

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchString}&appid=${OPENWEATHER_APIKEY}`;
    const data = (await axios(url)).data;
    // console.log(data, 'data');

    const result = await axios(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly,minutely&units=metric&appid=${OPENWEATHER_APIKEY}`,
    );
    console.log(result.data, 'forecast');

    setForecastList(result.data.daily);
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          borderColor: 'black',
          borderWidth: 2,
        }}>
        <View style={{flex: 1, flexGrow: 1}}>
          <TextInput
            onChangeText={(val) => setSearchString(val)}
            placeholder="Type city name"
            value={searchString}
          />
        </View>
        <Pressable
          onPress={handleSearchBtn}
          style={{
            backgroundColor: 'yellow',
            alignContent: 'center',
            justifyContent: 'space-around',
          }}>
          <Text>Search</Text>
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={{paddingTop: 30}}>
        {forecastList.map((item) => {
          return (
            <WeatherDetail
              key={item.dt}
              day={moment.unix(item.dt).format('dddd')}
              temperature={item.temp.day}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
