import React from 'react';
import type {PropsWithChildren} from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { FontAwesome } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';

import  * as KakaoLogin from '@react-native-seoul/kakao-login';
import QR from './qr';
import List from './list';

const Tab = createBottomTabNavigator();

function Lobby(): JSX.Element {

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}> 
      <Tab.Screen name="QR" component={QR} options={{
        tabBarIcon: () => (
          <Ionicons name="qr-code-outline" size={24} color="black" />
        ),
      }} />
      <Tab.Screen name="List" component={List} options={{
        tabBarIcon: () => (
          <Ionicons name="list-outline" size={24} color="black" />
        )
      }}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({

});

export default Lobby;
