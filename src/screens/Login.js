// import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import { TextInput } from 'react-native-gesture-handler';

const Login = () => {
    const navigation= useNavigation();

  return (
    <View style={styles.screen3}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Text style={[styles.enterMobileNumber, styles.back1Typo]}>
        Enter mobile number!
      </Text>
      <Text
        style={[styles.wellUseYour, styles.textFlexBox]}
      >{`We'll use your number only if we need to contact
you about your order,`}</Text>
      <Pressable
        style={styles.screen3Child}
        onPress={() => navigation.navigate("Main")}
      />
      <Text style={[styles.getStarted, styles.back1Typo]}>Get Started</Text>
      <Image
        style={[styles.closedStoresPana1]}
        resizeMode="cover"
        source={require("../assets/closed-storespana-1.png")}
      />
      <View style={[styles.screen3Item, styles.screen3Layout]} />
      <View style={[styles.screen3Inner, styles.screen3Layout]} />
      <Text style={[styles.countryCode, styles.mobileTypo]}>Country Code</Text>
      <TextInput placeholder='+91' style={[styles.text, styles.textFlexBox]}>+91</TextInput>
      <TextInput style={[styles.mobile, styles.mobileTypo]}>Mobile</TextInput>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={[styles.back1, styles.back1Typo]}>Back</Text>
      </Pressable>
      <Text style={[styles.myCity, styles.textFlexBox]}>My City</Text>
    </View>
  )
}

export default Login
const styles = StyleSheet.create({
    vectorIconPosition: {
      left: -555,
      position: "absolute",
    },
    back1Typo: {
      textAlign: "center",
      color: Color.white,
      fontFamily: FontFamily.fredokaSemibold,
      fontWeight: "600",
    },
    textFlexBox: {
      textAlign: "left",
      color: Color.white,
      position: "absolute",
    },
    screen3Layout: {
      height: 54,
      borderRadius: Border.br_mini,
      top: 490,
      position: "absolute",
      backgroundColor: Color.gray_100,
    },
    mobileTypo: {
      fontFamily: FontFamily.fredokaRegular,
      textAlign: 'left',
      position: "absolute",
    },
    vectorIcon: {
      top: 280,
      width: 980,
      height: 480,
    },
    enterMobileNumber: {
      top: 390,
      left: 12,
      fontSize: 22,
      width: 227,
      height: 38,
      position: "absolute",
    },
    wellUseYour: {
      top: 430,
      left: 19,
      fontSize: FontSize.size_xs,
      width: 331,
      height: 39,
      fontFamily: FontFamily.fredokaSemibold,
      fontWeight: "600",
      textAlign: "left",
    },
    screen3Child: {
      top: 640,
      left: 101,
      borderRadius: Border.br_31xl,
      width: 228,
      height: 69,
      position: "absolute",
      backgroundColor: Color.gray_100,
    },
    getStarted: {
      top: 660,
      left: 167,
      fontSize: FontSize.size_lg,
      width: 97,
      height: 21,
      position: "absolute",
    },
    closedStoresPana1: {
      top: 140,
      left: -16,
      width: 474,
      height: 228,
      backgroundColor: Color.gray_100,
    },
    screen3Item: {
      left: 38,
      width: 85,
    },
    screen3Inner: {
      left: 142,
      width: 251,
    },
    countryCode: {
      top: 495,
      left: 47,
      fontSize: FontSize.size_3xs,
      width: 67,
      height: 11,
      color: Color.white,
      fontFamily: FontFamily.fredokaRegular,
    },
    text: {
      top: 500,
      left: 55,
      width: 50,
      height: 45,
      fontSize: FontSize.size_xl,
      fontFamily: FontFamily.fredokaSemibold,
      fontWeight: "600",
      textAlign: "center",
    },
    mobile: {
      top: 500,
      left: 162,
      color: "rgba(255, 255, 255, 0.39)",
      width: 210,
      height: 45,
      fontSize: FontSize.size_xl,
    },
    back1: {
      width: 55,
      height: 23,
      fontSize: FontSize.size_xl,
    },
    back: {
      left: 32,
      top: 30,
      position: "absolute",
    },
    myCity: {
      top: 62,
      left: 121,
      fontSize: FontSize.size_29xl,
      fontFamily: FontFamily.blankaRegular,
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
    },
    screen3: {
      borderRadius: Border.br_3xs,
      flex: 1,
      width: "100%",
      height: 932,
      overflow: "hidden",
      backgroundColor: Color.gray_100,
    },
  });