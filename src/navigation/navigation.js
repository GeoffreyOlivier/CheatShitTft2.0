import React from 'react'
import { Button, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home/Home.screen'
import Profile from '../screens/Profile/Profile.screen'
import Icon from 'react-native-vector-icons/Ionicons'
import Champion from '../screens/Champion/Champion';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'List champions' }}
        />
        <Stack.Screen
          name="Champion"
          component={Champion}
          options={{ title: 'Champion' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  button: {
    marginTop: 50
  }
})


export default MainNavigation
