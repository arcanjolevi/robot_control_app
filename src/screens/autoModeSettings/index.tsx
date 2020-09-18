import {
  Container,
  Gradient,
  HeaderTitle,
  Header,
  Field,
  Label,
} from './styles';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import { DataContext } from '../../contexts/dataContext';
import { View, TextInput, StyleSheet } from 'react-native';
import { Button, ButtonText } from '../../globalStyles/styles';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';
import RouteTypesDefinition from '../router/RouterTypesDefinition';
import React, { useContext, useState, useRef, useEffect } from 'react';

type ProfileScreenRouteProp = RouteProp<
  RouteTypesDefinition,
  'AutoModeSettings'
>;
type ProfileScreenNavigationProp = DrawerNavigationProp<
  RouteTypesDefinition,
  'AutoModeSettings'
>;
type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

const AutoModeSettings = ({ navigation, route }: Props) => {
  const { autoModeData, updateModeData } = useContext(DataContext);

  const limitRef = useRef('');
  const steerRef = useRef('');
  const speedRef = useRef('');
  const correctionsMovementsRef = useRef('');
  const correctionFactorRef = useRef('');
  const detectDistanceRef = useRef('');
  const moveTimeRef = useRef('');
  const stopTimeRef = useRef('');

  async function handleSave() {
    const obj = {
      limit: limitRef.current,
      steer: steerRef.current,
      speed: speedRef.current,
      correctionsMovements: correctionsMovementsRef.current,
      correctionFactor: correctionFactorRef.current,
      detectDistance: detectDistanceRef.current,
      moveTime: moveTimeRef.current,
      stopTime: stopTimeRef.current,
    };

    updateModeData(obj);
  }

  useEffect(() => {
    if (autoModeData) {
      limitRef.current = autoModeData.limit;
      steerRef.current = autoModeData.steer;
      speedRef.current = autoModeData.speed;
      correctionsMovementsRef.current = autoModeData.correctionsMovements;
      correctionFactorRef.current = autoModeData.correctionFactor;
      detectDistanceRef.current = autoModeData.detectDistance;
      moveTimeRef.current = autoModeData.moveTime;
      stopTimeRef.current = autoModeData.stopTime;
    }
  }, [autoModeData]);

  return (
    <>
      <StatusBar backgroundColor='transparent' style='light' />
      <Gradient colors={['#8E2DE2', '#4A00E0']} />
      <Header style={style.header}>
        <MaterialIcons
          onPress={() => navigation.openDrawer()}
          name='menu'
          size={35}
          color='#FFF'
        />
        <HeaderTitle>Configuração do Modo Automático</HeaderTitle>
      </Header>
      <Container>
        <Field style={style.field}>
          <Label>Limite</Label>
          <TextInput
            onChangeText={(t) => (limitRef.current = t)}
            placeholder={autoModeData.limit}
            keyboardType='numeric'
            style={style.inputText}
          ></TextInput>
        </Field>
        <Field style={style.field}>
          <Label>Direção</Label>
          <TextInput
            placeholder={autoModeData.steer}
            keyboardType='numeric'
            style={style.inputText}
            onChangeText={(t) => (steerRef.current = t)}
          ></TextInput>
        </Field>
        <Field style={style.field}>
          <Label>Velocidade</Label>
          <TextInput
            placeholder={autoModeData.speed}
            keyboardType='numeric'
            style={style.inputText}
            onChangeText={(t) => (speedRef.current = t)}
          ></TextInput>
        </Field>
        <Field style={style.field}>
          <Label>N de movimentos de correção</Label>
          <TextInput
            placeholder={autoModeData.correctionsMovements}
            keyboardType='numeric'
            style={style.inputText}
            onChangeText={(t) => (correctionsMovementsRef.current = t)}
          ></TextInput>
        </Field>
        <Field style={style.field}>
          <Label>Fator de correção</Label>
          <TextInput
            placeholder={autoModeData.correctionFactor}
            keyboardType='numeric'
            style={style.inputText}
            onChangeText={(t) => (correctionFactorRef.current = t)}
          ></TextInput>
        </Field>
        <Field style={style.field}>
          <Label>Distância de colisão(m)</Label>
          <TextInput
            placeholder={autoModeData.detectDistance}
            keyboardType='numeric'
            style={style.inputText}
            onChangeText={(t) => (detectDistanceRef.current = t)}
          ></TextInput>
        </Field>
        <Field style={style.field}>
          <Label>Andar por(seg)</Label>
          <TextInput
            placeholder={autoModeData.moveTime}
            keyboardType='numeric'
            style={style.inputText}
            onChangeText={(t) => (moveTimeRef.current = t)}
          ></TextInput>
        </Field>
        <Field style={style.field}>
          <Label>Parar por(seg)</Label>
          <TextInput
            placeholder={autoModeData.stopTime}
            keyboardType='numeric'
            style={style.inputText}
            onChangeText={(t) => (stopTimeRef.current = t)}
          ></TextInput>
        </Field>

        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'center',
            width: widthPercentageToDP(80),
            marginTop: 20,
          }}
        >
          <Button onPress={handleSave} style={{ width: 120 }}>
            <ButtonText>Salvar</ButtonText>
          </Button>
        </View>
      </Container>
    </>
  );
};

export default AutoModeSettings;

const style = StyleSheet.create({
  header: {
    marginTop: Constants.statusBarHeight + 10,
    marginHorizontal: 10,
  },
  inputText: {
    fontSize: 20,
    color: '#FFF',
    paddingBottom: 2,
  },
  field: {
    width: widthPercentageToDP(80),
  },
});
