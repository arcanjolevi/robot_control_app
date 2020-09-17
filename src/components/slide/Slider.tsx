import React from 'react';

import { StyleSheet } from 'react-native';

import Slider from 'react-native-slider';

const SliderMine = () => {
  return (
    <Slider
      style={{ width: 200, height: 40 }}
      trackStyle={customStyles2.track}
      thumbStyle={customStyles2.thumb}
      minimumValue={0}
      maximumValue={1}
      minimumTrackTintColor='#FFFFFF'
      maximumTrackTintColor='#C4c4c4'
    />
  );
};

var customStyles2 = StyleSheet.create({
  track: {
    height: 4,
    borderRadius: 2,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
    borderColor: '#C4c4c4',
    borderWidth: 2,
  },
});

export default SliderMine;
