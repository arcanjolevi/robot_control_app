import React from 'react';
import Control from '../control';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

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
        <Drawer.Screen name='Control' component={Control} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
