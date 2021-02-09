import React from 'react';
import { View, Text, StyleSheet, Alert, Modal, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';


const TransportScreen = () => {
    return (
        <View style={styles.viewStyle}>
        <Text style={styles.header}>Transport Sytem</Text>
        <TouchableOpacity>
            <ImageBackground
                source={require("../../assets/images/plane.jpg")}
                style={styles.imgBackground}
            >
                <Text style={styles.textStyle}>Airplane</Text>
            </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity>
            <ImageBackground
                source={require("../../assets/images/train2.jpg")}
                style={styles.imgBackground}
            >
                <Text style={styles.textStyle}>Train</Text>
            </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity>
            <ImageBackground
                source={require("../../assets/images/bus.jpg")}
                style={styles.imgBackground}
            >
                <Text style={styles.textStyle}>Bus</Text>
            </ImageBackground>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        imgBackground: {
            width: 450,
            height: 200,
            marginTop:30
        },
        textStyle:{
            fontSize:25,
            color:"black",
            fontWeight:"bold",
            paddingTop:90,
            paddingLeft:10
        },
        viewStyle:{
            paddingTop:100
        },
        header:{
            fontSize:35,
            fontWeight:"bold",
            alignSelf:"center"
        }
    }
)

export default TransportScreen;