/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
      SafeAreaView,
      Text,
      StatusBar,
} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Dashboard from "./pages/Dashboard";
import SingleAd from "./pages/SingleAd";


const App: () => React$Node = () => {
      const Stack = createStackNavigator();
      return (
          <NavigationContainer>
           <Stack.Navigator>
                 <Stack.Screen  name="Dashboard" component={Dashboard} options={{headerShown: false }}/>
                 <Stack.Screen  name="SingleAd" component={SingleAd}  options={{
                       headerStyle: {
                             backgroundColor: '#99ccff',
                       },
                 }} />
           </Stack.Navigator>
          </NavigationContainer>
      );
};


export default App;
