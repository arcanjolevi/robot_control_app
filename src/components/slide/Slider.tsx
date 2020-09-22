import React from 'react';

import { StyleSheet } from 'react-native';

import Slider from 'react-native-slider';

interface SliderProps {
  minimumValue: number;
  maximumValue: number;
  onChange: (value: number) => void;
  value: number;
}

const SliderMine = ({
  value,
  maximumValue,
  minimumValue,
  onChange,
}: SliderProps) => {
  console.disableYellowBox = true;
  function handleChange(value: number) {
    onChange(Number(value.toFixed(0)));
  }
  return (
    <Slider
      style={{ width: 200, height: 40, marginHorizontal: 20 }}
      trackStyle={customStyles2.track}
      thumbStyle={customStyles2.thumb}
      onValueChange={handleChange}
      minimumValue={minimumValue}
      maximumValue={maximumValue}
      minimumTrackTintColor='#FFFFFF'
      maximumTrackTintColor='#C4c4c4'
      value={value}
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
