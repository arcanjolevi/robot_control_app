import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import { Button } from './styles';

interface ButtonControlProps {
  iconName: 'car' | 'bulb' | 'power';
  active: boolean;
  activeColor: string;
  inactiveColor: string;
  iconSize?: number;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const ButtonControl = ({
  iconName,
  iconSize = 30,
  active,
  activeColor,
  inactiveColor,
  onPress,
  style,
}: ButtonControlProps) => {
  return (
    <Button
      onPress={onPress}
      style={[style, { backgroundColor: active ? '#FFF' : 'transparent' }]}
    >
      {iconName === 'car' && (
        <AntDesign
          name='car'
          size={iconSize}
          color={active ? activeColor : inactiveColor}
        />
      )}
      {iconName === 'bulb' && (
        <MaterialCommunityIcons
          name='lightbulb-on-outline'
          size={iconSize}
          color={active ? activeColor : inactiveColor}
        />
      )}
      {iconName === 'power' && (
        <Feather
          name='power'
          size={iconSize}
          color={active ? activeColor : inactiveColor}
        />
      )}
    </Button>
  );
};

export default ButtonControl;
