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
            placeholder='192.168.1.2'
            keyboardType='numeric'
            style={style.inputText}
          ></TextInput>
        </Field>
        <Field style={style.field}>
          <Label>Port</Label>
          <TextInput
            placeholder='3334'
            keyboardType='numeric'
            style={style.inputText}
          ></TextInput>
        </Field>
        <Field style={style.field}>
          <Label>Tempo de resposta(ms)</Label>
          <TextInput
            placeholder='20'
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
