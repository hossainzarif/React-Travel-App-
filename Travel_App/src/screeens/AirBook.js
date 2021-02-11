import React from "react";
import { View, Text, StyleSheet, } from "react-native";
import { Alert, Modal, Image, ImageBackground } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";
import { Card, ListItem, Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const AirBook = ({navigation}) => {
  return (
    <ImageBackground
      source={require("../../assets/images/17663.jpg")}
      style={{ height: 900, width: 450 }}
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
            alignSelf: "center",
            marginLeft: 320
          }}
        >
          <Ionicons name="airplane-sharp" size={40} color="white" style={styles.iconStyle} />
        </View>

      </View>
      <Text style={styles.textStyle}>CHOOSE A FLIGHT</Text>
      <View>
        <Card containerStyle={styles.cardViewStyle}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={styles.headingFontStyle}
            >
              NYC
          </Text>
            <Text
              style={styles.dots}
            >
              - - - - - - - - - - - - - - - -
          </Text>
            <Text
              style={styles.headingFontStyle}
            >
              IDN
          </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                color: "#a2a2db",
                fontFamily: "RobotoRegular",
              }}
            >
              New York
          </Text>
            <Text
              style={{
                color: "#a2a2db",
                fontFamily: "RobotoRegular",
                paddingLeft: 220,
              }}
            >
              Indonesia
          </Text>
          </View>
          </Card>

        <Button
        type="solid"
          buttonStyle={{ height:50, width:385, marginLeft: 15, marginRight: 90, backgroundColor: "#5facdb" }}
          title="Book"
          onPress={()=>{
            navigation.navigate('BookingInfo');
            console.log('payemnt info screen')
          }}
        />

</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    fontSize: 30
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
    fontFamily: 'RobotoBold',
    alignSelf: "center",
    marginRight: 30
  },
  iconStyle: {
    marginLeft: 5
  },
  cardViewStyle: {
    fontSize: 30,
    backgroundColor: '#fff',
    height: 100,
    width: 380,
    marginRight: 50,
    alignSelf: "center",
    justifyContent: "center",
    shadowColor: '#470000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 1
  },
  headingFontStyle: {
    fontSize: 24,
    fontFamily: "RobotoBold",
    color: "black",
    fontWeight: "bold",
  },
  dots: {
    fontSize: 20,
    color: "#a2a2db",
    paddingHorizontal: 15,
  }
})
export default AirBook;