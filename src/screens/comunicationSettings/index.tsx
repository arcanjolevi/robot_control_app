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
import React, { useState, useContext, useRef, useEffect } from 'react';
import { Button, ButtonText } from '../../globalStyles/styles';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { View, Alert, TextInput, StyleSheet } from 'react-native';
import { ComunicationContext } from '../../contexts/comunication';
import RouteTypesDefinition from '../router/RouterTypesDefinition';

type ProfileScreenRouteProp = RouteProp<
  RouteTypesDefinition,
  'ComunicationSettings'
>;
type ProfileScreenNavigationProp = DrawerNavigationProp<
  RouteTypesDefinition,
  'ComunicationSettings'
>;
type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

const ComunicationSettings = ({ navigation, route }: Props) => {
  const { updatePort, updateAdress, adress, port } = useContext(
    ComunicationContext
  );

  const adressText = useRef('');
  const portText = useRef('');

  function handleSave() {
    updateAdress(adressText.current);
    updatePort(portText.current);
    Alert.alert('Sucesso', 'As informações foram salvas com êxito.');
  }

  useEffect(() => {
    if (adress && port) {
      adressText.current = adress;
      portText.current = port;
    }
  }, [adress, port]);

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
        <HeaderTitle>Comunicação</HeaderTitle>
      </Header>
      <Container>
        <Field style={style.field}>
          <Label>Adress</Label>
          <TextInput
            onChangeText={(t) => (adressText.current = t)}
            placeholder={adress}
            keyboardType='numeric'
            style={style.inputText}
          />
        </Field>
        <Field style={style.field}>
          <Label>Port</Label>
          <TextInput
            onChangeText={(t) => (portText.current = t)}
            placeholder={port}
            keyboardType='numeric'
            style={style.inputText}
          />
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

export default ComunicationSettings;

const style = StyleSheet.create({
  header: {
    marginTop: Constants.statusBarHeight + 10,
    marginHorizontal: 10,
  },
  inputText: {
    fontSize: 25,
    color: '#FFF',
    paddingBottom: 5,
  },
  field: {
    width: widthPercentageToDP(80),
  },
});
