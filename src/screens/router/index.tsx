import React from 'react';
import Info from '../info';
import Instructions from '../instructions';
import Control from '../control';
import RouteProps from './RouterTypesDefinition';
import AutoModeSettings from '../autoModeSettings';
import ComunicationSettings from '../comunicationSettings';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator<RouteProps>();

const Router = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Instructions'
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
        <Drawer.Screen
          name='Instructions'
          component={Instructions}
          options={{ title: 'Instruções de uso' }}
        />
        <Drawer.Screen
          name='Info'
          component={Info}
          options={{ title: 'Informações da aplicação' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
