import React, {useState, useEffect, memo, useRef} from 'react';
import {View, Text, Pressable} from 'react-native';
import {Marker, Callout} from 'react-native-maps';
import axios from 'axios';
import {OPENWEATHER_APIKEY} from '../.././helpers/constants';

const MarkerInfoContainer = ({coordinate, ...props}) => {
  const [locationWeather, setLocationWeather] = useState({
    temperature: '',
    location: '',
  });

  const [loaded, setLoaded] = useState(false);
  const ref = useRef();

  // let url = `http://api.weatherstack.com/current?access_key=80a3192881ea56dea128cda503b36bb4&query=${coordinate.latitude},${coordinate.longitude}`;

  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate.latitude}&lon=${coordinate.longitude}&exclude=hourly,minutely&units=metric&appid=${OPENWEATHER_APIKEY}`;

  let ulr2 = `https://eu1.locationiq.com/v1/reverse.php?key=363de1ecb652ea&lat=${coordinate.latitude}&lon=${coordinate.longitude}&format=json`;

  const setNewWeather = async () => {
    let temperature;
    let location;

    setLoaded(false);
    await axios
      .get(url)
      .then((res) => {
        console.log(res.data, 'url res');
        // setLocation('mmm2');
        // setTemperature(res.data.current.temperature);
        temperature = res.data.current.temp;
      })
      .catch((err) => console.log(err));

    await axios
      .get(ulr2)
      .then((res) => {
        console.log(res.data, 'url2 res');
        location = res.data.display_name;
      })
      .catch((err) => console.log(err));

    setLocationWeather({location, temperature});
    setLoaded(true);
    redraw();
  };

  //Seems like don't working while callout showning...
  const redraw = () => {
    if (ref && ref.current && ref.current.redrawCallout) {
      console.log('redraw');
      ref.current.redrawCallout();
    }
  };

  useEffect(() => {
    setNewWeather();
  }, []);

  const {temperature, location} = locationWeather;

  return (
    <MarkerInfo
      {...props}
      ref={ref}
      coordinate={coordinate}
      location={locationWeather.location}
      temperature={locationWeather.temperature}
      onPress={setNewWeather}
      loaded={loaded}
    />
  );
};

const MarkerInfo = React.forwardRef(
  ({location, temperature, onPress, loaded, ...props}, ref) => {
    return (
      <Marker style={{width: 150}} {...props} onPress={onPress} ref={ref}>
        <Callout onPress={() => props.onPressedCollapse(location)}>
          {loaded ? (
            <View>
              <Text>{location}</Text>
              <Text>{temperature}°C</Text>
            </View>
          ) : (
            <Text>Loading...</Text>
          )}
        </Callout>
      </Marker>
    );
  },
);

export default memo(MarkerInfoContainer);
