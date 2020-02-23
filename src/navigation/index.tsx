import * as React from 'react';
//ui
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//screens
import MainScreen from '../screens/MainScreen';
import OtherScreen from '../screens/OtherScreen';
// create instance
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//interface
export type IProps = {};
const AppContainer: React.FC<IProps> = props => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Other" component={OtherScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default AppContainer;
