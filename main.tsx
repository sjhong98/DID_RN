import React from 'react';
import type {PropsWithChildren} from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity, } from 'react-native';

import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';

import kakaoLogin from './assets/images/kakao_login.png';
import  * as KakaoLogin from '@react-native-seoul/kakao-login';
import { login } from 'react-native-kakao-logins';
import { useNavigation } from '@react-navigation/native';



function Main(): JSX.Element {

    const navigation = useNavigation();

    const Login = () => {

        KakaoLogin.login().then((result) => {
            console.log("===== Login Success ===== \n", JSON.stringify( result));
            navigation.navigate("Lobby");
            
        })
    }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#fff'}}> 
      <View style={{flex:10, justifyContent:'center'}}>
        <Text style={{fontSize:100, textAlign:'center'}}>DID</Text>
      </View>
      <TouchableOpacity onPress={Login} style={{flex: 2}}>
        <View style={{backgroundColor:'#fff', flexDirection:'row', justifyContent:'center'}}>
                <Image source={kakaoLogin} style={{width:'60%', resizeMode:'contain'}} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default Main;
