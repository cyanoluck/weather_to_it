import React, {useState, useEffect, memo, useRef} from 'react';
import {View, Text, Pressable} from 'react-native';
import {Marker, Callout} from 'react-native-maps';
import axios from 'axios';

const MarkerInfoContainer = ({coordinate, ...props}) => {
  const [locationWeather, setLocationWeather] = useState({
    temperature: '',
    location: '',
  });

  const [loaded, setLoaded] = useState(false);
  const ref = useRef();

  let url = `http://api.weatherstack.com/current?access_key=80a3192881ea56dea128cda503b36bb4&query=${coordinate.latitude},${coordinate.longitude}`;

  let ulr2 = `https://eu1.locationiq.com/v1/reverse.php?key=363de1ecb652ea&lat=${coordinate.latitude}&lon=${coordinate.longitude}&format=json`;

  const setNewWeather = async () => {
    console.log('setNewWeather');
    let temperature;
    let location;

    // useEffect(
    //   () => {
    //     console.log('effect');
    //   },
    //   location,
    //   temperature,
    // );

    setLoaded(false);
    await axios
      .get(url)
      .then((res) => {
        console.log(res.data, 'url res');
        // setLocation('mmm2');
        // setTemperature(res.data.current.temperature);
        temperature = res.data.current.temperature;
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

    console.log('after axios');
    console.log(location, 'location');
    console.log(temperature, 'temperature');

    redraw();
  };

  //Seems like don't working while callout showning...
  const redraw = () => {
    if (ref && ref.current && ref.current.redrawCallout) {
      console.log('redraw');
      // ref.current.hideCallout();
      // ref.current.redrawCallout();
      // ref.current.showCallout();
    }
  };

  useEffect(() => {
    console.log('MarkerInfoContainer effect');
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
      <Marker {...props} onPress={onPress} ref={ref}>
        <Callout onPress={() => console.log('callout pressed')}>
          {loaded ? (
            <View>
              <Text>{location}</Text>
              <Text>{temperature}</Text>
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
