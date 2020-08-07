import React, { useState, useRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MarkerInfoContainer from '../components/marker-info/MarkerInfo';

const MapScreen = () => {
  const [markers, setMarkers] = useState([]);

  const handleLongPress = ({ nativeEvent: { coordinate, position } }) => {
    setMarkers([...markers, {
      coordinate,
    }]);
  };

  const renderMarker = (marker, index) => <MarkerInfoContainer
    key={marker.coordinate.latitude}
    coordinate={marker.coordinate}
  />;

  return (
    <>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 51.8078,
          longitude: -0.0877321,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
        onLongPress={handleLongPress}
      >
        {
          markers.map(renderMarker)
        }
      </MapView>
    </>
  );
};

export default MapScreen;
