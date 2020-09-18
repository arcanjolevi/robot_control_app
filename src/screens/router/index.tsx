import React from 'react';
import Control from '../control';
import ComunicationSettings from '../comunicationSettings';
import AutoModeSettings from '../autoModeSettings';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import RouteProps from './RouterTypesDefinition';

const Drawer = createDrawerNavigator<RouteProps>();

const Router = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Control'
        drawerStyle={{ backgroundColor: '#8E2DE2' }}
        drawerContentOptions={{
          activeBackgroundColor: '#8E1DEA',
          labelStyle: { color: '#FFF', fontWeight: 'bold' },
          itemStyle: {
            borderBottomColor: '#FFF',
            borderBottomWidth: 2,
          },
        }}
      >
        <Drawer.Screen
          name='Control'
          component={Control}
          options={{ title: 'Controle' }}
        />
        <Drawer.Screen
          name='ComunicationSettings'
          component={ComunicationSettings}
          options={{ title: 'Ajustes de Comunicação' }}
        />
        <Drawer.Screen
          name='AutoModeSettings'
          component={AutoModeSettings}
          options={{ title: 'Ajustes Modo Automático' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
