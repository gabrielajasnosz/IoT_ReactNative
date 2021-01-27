import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Header from './Header';

function ConnectionScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d7d4e3',
      }}>
      <Text>Connection</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#ffffff',
          inactiveTintColor: '#ffffff',
          inactiveBackgroundColor: '#8d9bc4',
          activeBackgroundColor: '#1b096b',

          labelStyle: {
            fontSize: 20,
            padding: 10,
          },
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <Tab.Screen name="HOME" component={HomeScreen} />
        <Tab.Screen name="CONNECTION" component={ConnectionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b096b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
