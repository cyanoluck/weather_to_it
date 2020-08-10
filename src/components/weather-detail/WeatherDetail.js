import React, {useState, useEffect, memo, useRef} from 'react';
import {Marker, Callout} from 'react-native-maps';
import {View, Text, Pressable} from 'react-native';
import axios from 'axios';

const WeatherDetail = ({day, temperature}) => {
  return (
    <View
      style={{
        flex: 1,
        height: 80,
        flexDirection: 'row',
        margin: 10,
        backgroundColor: 'lightblue',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <View>
        <Text>{day}</Text>
      </View>

      <View>
        <Text>metric</Text>
      </View>
    </View>
  );
};

export default WeatherDetail;
