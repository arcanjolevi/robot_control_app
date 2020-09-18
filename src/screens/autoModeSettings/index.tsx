import {
  Container,
  Gradient,
  HeaderTitle,
  Header,
  Field,
  Label,
} from './styles';
import { Button, ButtonText } from '../../globalStyles/styles';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import React, { useState } from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { RouteProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import RouteTypesDefinition from '../router/RouterTypesDefinition';
import styled from 'styled-components';

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
            placeholder='50'
            keyboardType='numeric'
            style={style.inputText}
          ></TextInput>
        </Field>
        <Field style={style.field}>
          <Label>Direção</Label>
          <TextInput
            placeholder='-2'
            keyboardType='numeric'
            style={style.inputText}
          ></TextInput>
        </Field>
        <Field style={style.field}>
          <Label>Velocidade</Label>
          <TextInput
            placeholder='-26'
            keyboardType='numeric'
            style={style.inputText}
          ></TextInput>
        </Field>
        <Field style={style.field}>
          <Label>N de movimentos de correção</Label>
          <TextInput
            placeholder='5'
            keyboardType='numeric'
            style={style.inputText}
          ></TextInput>
        </Field>
        <Field style={style.field}>
          <Label>Fator de correção</Label>
          <TextInput
            placeholder='15'
            keyboardType='numeric'
            style={style.inputText}
          ></TextInput>
        </Field>
        <Field style={style.field}>
          <Label>Distância de colisão(m)</Label>
          <TextInput
            placeholder='1.5'
            keyboardType='numeric'
            style={style.inputText}
          ></TextInput>
        </Field>
        <Field style={style.field}>
          <Label>Andar por(seg)</Label>
          <TextInput
            placeholder='0'
            keyboardType='numeric'
            style={style.inputText}
          ></TextInput>
        </Field>
        <Field style={style.field}>
          <Label>Parar por(seg)</Label>
          <TextInput
            placeholder='0'
            keyboardType='numeric'
            style={style.inputText}
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
          <Button style={{ width: 120 }}>
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
