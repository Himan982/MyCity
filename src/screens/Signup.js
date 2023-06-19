import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, TouchableOpacity , View, Text, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";


const Signup = () => {
    const navigation= useNavigation();
  return (
    <View style={styles.screen2}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        // resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={[styles.welcomeToMy, styles.findAllTheTypo]}>
        welcome to My City
      </Text>
      <Text
        style={[styles.findAllThe, styles.findAllTheTypo]}
      >{`Find All the Resources in your city  
Discover more from your Neighbourhood`}</Text>
      <TouchableOpacity
        style={styles.screen2Child}
        onPress={() => navigation.navigate('Login')}
      >
        
      </TouchableOpacity>
      <Text style={[styles.getStarted, styles.loginTypo]}>Get Started</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >

      <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      </TouchableOpacity>
      <Image
        style={[styles.closedStoresPana1]}
        resizeMode="cover"
        source={require("../assets/closed-storespana-1.png")}
      />
      <Text style={styles.myCity}>My City</Text>
      <Image
        style={styles.mycityLogo2}
        resizeMode="cover"
        source={require("../assets/mycity-logo-2.png")}
      />
    </View>
  )
}

export default Signup
const styles = StyleSheet.create({
    vectorIconPosition: {
      left: -530,
      top: 370,
      position: "absolute",
    },
    findAllTheTypo: {
      textAlign: "center",
      fontFamily: FontFamily.fredokaSemibold,
      fontWeight: "600",
      color: Color.white,
      position: "absolute",
    },
    loginTypo: {
      height: 30,
      width: 97,
      left: 170,
      textAlign: "center",
      color: Color.white,
      fontFamily: FontFamily.fredokaSemibold,
      fontWeight: "600",
      position: "absolute",
    },
    vectorIcon: {
      top: 538,
      width: 940,
      height: 380,
    },
    welcomeToMy: {
      top: 500,
      left: 33,
      fontSize: 32,
      width: 364,
      height: 42,
    },
    findAllThe: {
      top: 570,
      left: 53,
      fontSize: 14,
      width: 331,
      height: 39,
    },
    screen2Child: {
      top: 620,
      left: 104,
      borderRadius: Border.br_31xl,
      width: 228,
      height: 69,
      position: "absolute",
      backgroundColor: Color.gray_100,
    },
    getStarted: {
      top: 640,
      fontSize: FontSize.size_lg,
    },
    login: {
      top: 700,
      fontSize: FontSize.size_xl,
    },
    closedStoresPana1: {
      top: 250,
      backgroundColor: Color.gray_100,
      width: 474,
      height: 228,
      right: 16
    },
    myCity: {
      top: 83,
      left: 118,
      fontSize: FontSize.size_29xl,
      fontFamily: FontFamily.blankaRegular,
      textAlign: "left",
      display: "flex",
      alignItems: "center",
      width: 211,
      height: 94,
      textShadowColor: "rgba(0, 0, 0, 0.25)",
      textShadowOffset: {
        width: 0,
        height: 4,
      },
      textShadowRadius: 4,
      color: Color.white,
      position: "absolute",
    },
    mycityLogo2: {
      top: 10,
      left: 4,
      width: 60,
      height: 60,
      position: "absolute",
      overflow: "hidden",
    },
    screen2: {
      flex: 1,
      width: "100%",
      height: 932,
      overflow: "hidden",
      backgroundColor: Color.gray_100,
    },
  });