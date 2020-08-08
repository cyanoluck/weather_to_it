import React, { useState, useEffect, memo,useRef } from 'react';
import { Marker, Callout } from 'react-native-maps';
import { View, Text, Pressable } from 'react-native';
import axios from 'axios';

const MarkerInfoContainer = ({ key, coordinate, ...props }) => {
  const [location, setLocation] = useState('London, UK');
  const [temperature, setTemperature] = useState('+1C');
  const [loaded, setLoaded] = useState(false);
  const ref = useRef();

  let url = `http://api.weatherstack.com/current?access_key=a0511487d6eb5967bad5b78dc1525142&query=${coordinate.latitude},${coordinate.longitude}`;

  const setNewWeather = () => {
    console.log("press");
    axios.get(url)
      .then(res => {
        // console.log(res.data);
        setLocation(res.data.location.name);
        setTemperature(Math.random());
      })
      .catch(err => console.log(err))
      .finally(()=>redraw())
  }

  const redraw = ()=>{
    if (ref && ref.current && ref.current.redraw) {
      console.log('redraw');
      ref.current.hideCallout();

      // ref.current.redraw();
    }
  }

  useEffect(() => {
    console.log("MarkerInfoContainer effect")
    setNewWeather();
    redraw();
  },[location,temperature]);

  useEffect(() => {
    console.log("MarkerInfoContainer effect")
    redraw();
  },[]);

  return <MarkerInfo
    {...props}
    ref={ref}
    coordinate={coordinate}
    location={location}
    temperature={temperature}
    onPress={setNewWeather}
    />;
};

const MarkerInfo = React.forwardRef(({ coordinate, location, temperature, onPress }, ref) => {
  return (
    <Marker
      coordinate={coordinate}
      onPress={onPress}
      ref={ref}
    >
      <Callout>
        <View>
          <Text>
            {location}
          </Text>
          <Text>
            {temperature}
          </Text>
          <Pressable onPress={()=>setLocation("Hello")}>CLICK ME</Pressable>
        </View>
      </Callout>
    </Marker>
  );
});

export default memo(MarkerInfoContainer);
