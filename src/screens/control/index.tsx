import {
  Container,
  Gradient,
  ButtonsContainer,
  SliderContainer,
} from './styles';
import { View } from 'react-native';
import Constants from 'expo-constants';
import React, { useState } from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import Slider from '../../components/slide/Slider';
import { RouteProp } from '@react-navigation/native';
import JoyBall from '../../components/joyBall/JoyBall';
import ButtonControl from '../../components/buttonControl';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import RouteTypesDefinition from '../router/RouterTypesDefinition';

type ProfileScreenRouteProp = RouteProp<RouteTypesDefinition, 'Control'>;
type ProfileScreenNavigationProp = DrawerNavigationProp<
  RouteTypesDefinition,
  'Control'
>;
type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

const Control = ({ navigation, route }: Props) => {
  const [on, setOn] = useState(false);
  const [lightOn, setLightsOn] = useState(false);
  const [autoMode, setAutoMode] = useState(false);

  return (
    <>
      <StatusBar backgroundColor='transparent' style='light' />
      <Gradient colors={['#8E2DE2', '#4A00E0']} />
      <View
        style={{
          marginTop: Constants.statusBarHeight + 10,
          marginLeft: 10,
        }}
      >
        <MaterialIcons
          onPress={() => navigation.openDrawer()}
          name='menu'
          size={35}
          color='#FFF'
        />
      </View>
      <Container>
        <JoyBall
          width={widthPercentageToDP(80)}
          height={heightPercentageToDP(60)}
          backgroundColor='transparent'
          ballColor='#F5f5f5'
        />

        <ButtonsContainer>
          <ButtonControl
            iconName='power'
            active={on}
            activeColor='#8E2DE2'
            inactiveColor='#FFF'
            onPress={() => setOn(!on)}
          />

          <ButtonControl
            iconName='bulb'
            active={lightOn}
            activeColor='#8E2DE2'
            inactiveColor='#FFF'
            onPress={() => setLightsOn(!lightOn)}
            style={{ marginHorizontal: 20 }}
          />

          <ButtonControl
            iconName='car'
            active={autoMode}
            activeColor='#8E2DE2'
            inactiveColor='#FFF'
            onPress={() => setAutoMode(!autoMode)}
          />
        </ButtonsContainer>

        <SliderContainer>
          <Slider />
        </SliderContainer>
      </Container>
    </>
  );
};

export default Control;
