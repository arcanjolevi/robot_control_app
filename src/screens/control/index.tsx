import {
  Container,
  Gradient,
  ButtonsContainer,
  SliderContainer,
} from './styles';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { View, Text } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import Slider from '../../components/slide/Slider';
import { RouteProp } from '@react-navigation/native';
import JoyBall from '../../components/joyBall/JoyBall';
import { DataContext } from '../../contexts/dataContext';
import { ComunicationContext } from '../../contexts/comunication';
import ButtonControl from '../../components/buttonControl';
import { Button, ButtonText } from '../../globalStyles/styles';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import React, { useState, useCallback, useContext } from 'react';
import RouteTypesDefinition from '../router/RouterTypesDefinition';
import ConnectedIndicator from '../../components/connectedIndicator';
import { MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

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
    autoMode,
    switchAutoMode,
    lightOn,
    switchLight,
    limit,
    setLimit,
    powerA,
    switchPowerA,
    speed,
    steer,
    send,
  } = useContext(DataContext);

  const { connected } = useContext(ComunicationContext);

  function increaseLimit() {
    if (limit < 100) setLimit(limit + 1);
  }

  function decreaseLimit() {
    if (limit > 0) {
      setLimit(limit - 1);
    }
  }

  function handleSend() {}

  return (
    <>
      <StatusBar backgroundColor='transparent' style='light' />
      <Gradient colors={['#8E2DE2', '#4A00E0']} />
      <View
        style={{
          marginTop: Constants.statusBarHeight + 10,
          marginHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <MaterialIcons
          onPress={() => navigation.openDrawer()}
          name='menu'
          size={35}
          color='#FFF'
        />
        <ConnectedIndicator connected={connected} />
      </View>
      <Container>
        <JoyBall
          send={send}
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
            onPress={decreaseLimit}
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
            onPress={increaseLimit}
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
