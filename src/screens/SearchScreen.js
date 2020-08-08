import React,{useState} from 'react';
import { Text, View,TextInput, Pressable } from 'react-native';
import axios from 'axios';

const SearchScreen = () => {
  const [forecastList, setForecastList] = useState([]);
  const [searchString, setSearchString] = useState("")

  const handleSearchBtn = () => {
    // let url = `http://api.weatherstack.com/forecast?access_key=a0511487d6eb5967bad5b78dc1525142&query=${searchString}&forecast_days=7&hourly=24`;
    let url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${searchString}&cnt=${7}&appid=0c0d60691e2d42da75db8e266a8ec880`;

    // Requesthttp://api.weatherstack.com/forecast
    // ? access_key = YOUR_ACCESS_KEY
    // & query = New York
    // & forecast_days = 1
    // & hourly = 1

    axios("https://climacell-microweather-v1.p.rapidapi.com/weather/forecast/hourly?fields=precipitation&unit_system=si&lat=42.8237618&lon=-71.2216286", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "climacell-microweather-v1.p.rapidapi.com",
        "x-rapidapi-key": "266dc4ea45mshe74a1a9798d796bp155a49jsn97e0e8574ae5"
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });

    // axios.get(url)
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => console.log(err))
  }

  return (
    <View>
      <View style={{flexDirection:'row'}}>
      <TextInput 
        onChangeText={(val)=>setSearchString(val)}
        placeholder="Type city name" 
        value={searchString} 
        style={{flexGrow:1}}
      />
      <Pressable onPress={handleSearchBtn} style={{backgroundColor:'red'}}>
        <Text>Search</Text>
      </Pressable>
      </View>
      
    </View>
  );
};

export default SearchScreen;
