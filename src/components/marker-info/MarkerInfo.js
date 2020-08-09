import React, {useState, useEffect, memo, useRef} from 'react';
import {View, Text, Pressable} from 'react-native';
import {Marker, Callout} from 'react-native-maps';
import axios from 'axios';

const MarkerInfoContainer = ({key, coordinate, ...props}) => {
  const [locationWeather, setLocationWeather] = useState({
    temperature: '',
    location: '',
  });

  const [loaded, setLoaded] = useState(false);
  const ref = useRef();

  let url = `http://api.weatherstack.com/current?access_key=80a3192881ea56dea128cda503b36bb4&query=${coordinate.latitude},${coordinate.longitude}`;

  let ulr2 = `https://eu1.locationiq.com/v1/reverse.php?key=363de1ecb652ea&lat=${coordinate.latitude}&lon=${coordinate.longitude}&format=json`;

  const setNewWeather = () => {
    console.log('setNewWeather');
    setLoaded(false);

    let temperature;
    let location;

    axios
      .get(url)
      .then((res) => {
        console.log(res.data, 'res');
        // setLocation('mmm2');
        // setTemperature(res.data.current.temperature);
        temperature = res.data.current.temperature;
      })
      .catch((err) => console.log(err));

    axios
      .get(ulr2)
      .then((res) => {
        console.log(res.data, 'res.data');
        city = res.data.display_name;
      })
      .catch((err) => console.log(err))
      .finally(() => {});

    // setLocationWeather({location, temperature});
    console.log(locationWeather);
    setLoaded(true);
  };

  //Seems like don't working while callout showning...
  const redraw = () => {
    if (ref && ref.current && ref.current.redrawCallout) {
      console.log('redraw');
      ref.current.redrawCallout();
    }
  };

  useEffect(() => {
    console.log('MarkerInfoContainer effect');
    setNewWeather();
  }, []);

  const {temperature, location} = locationWeather;

  console.log(locationWeather.temperature, locationWeather.location);

  return (
    <MarkerInfo
      {...props}
      ref={ref}
      coordinate={coordinate}
      location={locationWeather.location}
      temperature={locationWeather.temperature}
      onPress={setNewWeather}
      key={key}
      loaded={loaded}
    />
  );
};

const MarkerInfo = React.forwardRef(
  ({location, temperature, onPress, loaded, ...props}, ref) => {
    return (
      <Marker {...props} onPress={onPress} ref={ref}>
        <Callout onPress={() => console.log('callout pressed')}>
          {/* {loaded ? ( */}
          <View>
            <Text>{location}</Text>
            <Text>{temperature}</Text>
          </View>
          {/* ) : (
            <Text>Loading...</Text>
          )} */}
        </Callout>
      </Marker>
    );
  },
);

export default memo(MarkerInfoContainer);
