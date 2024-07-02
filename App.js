import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UsernameScreen from './screens/UsernameScreen.js';
import LobbyScreen from './screens/LobbyScreen.js';
import QuestionScreen from './screens/QuestionScreen.js';
import AdminScreen from './screens/AdminScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Username" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Username" component={UsernameScreen} />
        <Stack.Screen name="Lobby" component={LobbyScreen} />
        <Stack.Screen name="Question" component={QuestionScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
