import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";


const Splash = () => {
    const navigation= useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        },2000)
    },[])

  return (
    <View style={styles.screen1}>
      <Image
        style={styles.closedStoresPana1}
        // resizeMode="cover"
        source={require("./bg.png")}
      />
      <Image
        style={styles.mycityLogo1}
        resizeMode="cover"
        source={require("./mycity-logo-1.png")}
      />
      <View style={styles.screen1Child} />
      <Text style={styles.myCity}>My City</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  closedStoresPana1: {
    top: 450,
    left: 0,
    width: 464,
    height: 328,
    position: "absolute",
  },
  mycityLogo1: {
    top: 150,
    left: 144,
    width: 130,
    height: 141,
    position: "absolute",
    overflow: "hidden",
  },
  screen1Child: {
    top: 150,
    left: 140,
    borderRadius: 40,
    backgroundColor: "rgba(217, 217, 217, 0)",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 4,
    width: 150,
    height: 150,
    position: "absolute",
  },
  myCity: {
    top: 340,
    left: 135,
    fontSize: FontSize.size_29xl,
    fontFamily: FontFamily.blankaRegular,
    color: Color.white,
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
    position: "absolute",
  },
  screen1: {
    backgroundColor: Color.gray_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});