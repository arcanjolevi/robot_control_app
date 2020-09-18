import {
  Container,
  Gradient,
  ButtonsContainer,
  SliderContainer,
} from './styles';
import { Button, ButtonText } from '../../globalStyles/styles';
import { View } from 'react-native';
import Constants from 'expo-constants';
import React, { useState, useCallback, useContext } from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import Slider from '../../components/slide/Slider';
import { RouteProp } from '@react-navigation/native';
import JoyBall from '../../components/joyBall/JoyBall';
import ButtonControl from '../../components/buttonControl';
import { MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import RouteTypesDefinition from '../router/RouterTypesDefinition';

import { ComunicationContext } from '../../contexts/comunication';

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
  const {
    send,
    setLimit,
    limit,
    speed,
    steer,
    switchAutoMode,
    autoMode,
    lightOn,
    switchPowerA,
    switchLight,
    powerA,
  } = useContext(ComunicationContext);

  function increaseSpeed() {}

  function decreaseSpeed() {}

  function handleSend() {}

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
          refX={steer}
          refY={speed}
          width={widthPercentageToDP(80)}
          height={heightPercentageToDP(50)}
          backgroundColor='transparent'
          ballColor='#F5f5f5'
        />

        <ButtonsContainer>
          <ButtonControl
            iconName='power'
            active={powerA}
            activeColor='#8E2DE2'
            inactiveColor='#FFF'
            onPress={switchPowerA}
          />

          <ButtonControl
            iconName='bulb'
            active={lightOn}
            activeColor='#8E2DE2'
            inactiveColor='#FFF'
            onPress={switchLight}
            style={{ marginHorizontal: 20 }}
          />

          <ButtonControl
            iconName='car'
            active={autoMode}
            activeColor='#8E2DE2'
            inactiveColor='#FFF'
            onPress={switchAutoMode}
          />
        </ButtonsContainer>

        <SliderContainer>
          <AntDesign
            onPress={decreaseSpeed}
            name='minuscircleo'
            size={24}
            color='#FFF'
          />
          <View style={{ alignItems: 'center' }}>
            <Slider
              value={limit}
              onChange={setLimit}
              maximumValue={100}
              minimumValue={0}
            />
            <ButtonText style={{ color: '#FFF' }}>
              Velocidade {limit}%
            </ButtonText>
          </View>

          <AntDesign
            onPress={increaseSpeed}
            name='pluscircleo'
            size={24}
            color='#FFF'
          />
        </SliderContainer>

        <Button onPress={send} style={{ borderColor: '#FFF' }}>
          <ButtonText style={{ color: '#FFF' }}>Parar</ButtonText>
          <FontAwesome name='hand-stop-o' size={24} color='#FFF' />
        </Button>
      </Container>
    </>
  );
};

export default Control;
