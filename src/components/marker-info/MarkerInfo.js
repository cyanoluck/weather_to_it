import React, { useState, useEffect, memo } from 'react';
import { Marker, Callout } from 'react-native-maps';
import { View, Text } from 'react-native';
import axios from 'axios';

const MarkerInfoContainer = ({ key, coordinate, ...props }) => {
  const [location, setLocation] = useState('');
  const [temperature, setTemperature] = useState('');

  useEffect(() => {
    // let GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + coordinate.latitude + '%2C' + coordinate.longitude + '&language=ru';
    //
    // axios.get();
    console.log('useEffect');
    let url = `http://api.weatherstack.com/current?access_key=39ca337d69992015c22a51bb8a68f246&query=${coordinate.latitude},${coordinate.longitude}`;

    // url = `http://api.weatherstack.com/current?access_key=39ca337d69992015c22a51bb8a68f246&query=49.420975,30.1539423`;

    axios.get(url)
      .then(res => {
        console.log(res.data);
        setLocation(res.data.location.name);
        setTemperature(res.data.current.temperature);
      })
      .catch(err => console.log(err));
  });

  return <MarkerInfo
    coordinate={coordinate}
    location={location}
    temperature={temperature}
  />;
};

const MarkerInfo = ({ coordinate, location, temperature }) => {
  return (
    <Marker
      coordinate={coordinate}
      onPress={() => {
        console.log('marker');
      }}
    >
      <Callout>
        <View>
          <Text>
            {location}
          </Text>
          <Text>
            {temperature}
          </Text>
        </View>
      </Callout>
    </Marker>
  );
};

export default memo(MarkerInfoContainer);
