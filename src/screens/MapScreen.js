import React, {useState, useRef} from 'react';
import {View, Text, Pressable} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import MarkerInfo from '../components/marker-info/MarkerInfo';

const MapScreen = ({navigation}) => {
  const [markers, setMarkers] = useState([]);

  const handleLongPress = ({nativeEvent: {coordinate}}) => {
    console.log(coordinate);
    setMarkers([
      ...markers,
      {
        coordinate,
      },
    ]);
  };

  const renderMarker = ({coordinate}, index) => (
    <MarkerInfo
      key={index}
      coordinate={coordinate}
      onPressedCollapse={(location) =>
        navigation.navigate('Search', {coordinate, location})
      }
    />
  );

  return (
    <>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 50.4501,
          longitude: 30.5234,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
        onLongPress={handleLongPress}>
        {markers.map(renderMarker)}
      </MapView>
    </>
  );
};

export default MapScreen;
