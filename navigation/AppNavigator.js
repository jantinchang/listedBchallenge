import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import FeedScreen from '../screens/FeedScreen';
import DetailScreen from '../screens/DetailScreen';
import AddScreen from '../screens/AddScreen';
import EditScreen from '../screens/EditScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
    <Stack.Navigator screenOptions={{}} >
        <Stack.Screen name='welcome' component={WelcomeScreen} />
        <Stack.Screen name='feed' component={FeedScreen} />
        <Stack.Screen name='details' component={DetailScreen} />
        <Stack.Screen name='add' component={AddScreen} />
        <Stack.Screen name='edit' component={EditScreen} />
    </Stack.Navigator>
);

export default AppNavigator;