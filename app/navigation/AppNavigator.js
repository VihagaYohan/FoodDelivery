import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import HomeScreen from '../screens/Home';
import RestaurantScreen from '../screens/Restaurant';
import OrderDeliveryScreen from '../screens/OrderDelivery';

// navigator
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen name="OrderDelivery" component={OrderDeliveryScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
