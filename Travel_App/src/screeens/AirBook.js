import React from "react";
import { View, Text, StyleSheet, } from "react-native";
import {Alert, Modal, Image, ImageBackground } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";

const AirBook=()=>{
    return(
    <ImageBackground
    source={require("../../assets/images/17663.jpg")}
    style={{ height: 450, width: 200 }}
    >
      <View
          style={{
            width: 100,
            marginTop: 50,
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              backgroundColor: "#5facdb",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/images/p.png")}
              style={{ height: 26, width: 26 }}
            />
          </View>
        </View>

    </ImageBackground>
    );
};

const styles= StyleSheet.create({
    container:{
      padding:10,
      fontSize:30  
    }
})
export default AirBook;