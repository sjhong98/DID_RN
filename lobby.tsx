import React from 'react';
import type {PropsWithChildren} from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity, } from 'react-native';

import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';

import kakaoLogin from './assets/images/kakao_login';
import  * as KakaoLogin from '@react-native-seoul/kakao-login';

function Lobby(): JSX.Element {

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#fff'}}> 
        <View style={{backgroundColor:'#fff', flex:2, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:60}}>DID</Text>
        </View>
        <View style={{backgroundColor:'#fff', flex:10}}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default Lobby;
