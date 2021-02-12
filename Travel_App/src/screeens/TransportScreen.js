import React from 'react';
import { View, Text, StyleSheet, Alert, Modal, Image, ImageBackground,StatusBar, Dimensions } from "react-native";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Header } from "react-native-elements";
import BackgroundCurve from '../Reusable/BackgroundCurve';

const TransportScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <BackgroundCurve style={styles.svg}/>
            <View style={styles.viewStyle}>
                <Text style={styles.heading}>{`Explore your \ntransport options`}</Text>
            </View>
            <ScrollView horizontal={true}>
            <TouchableOpacity onPress={() =>{
            navigation.navigate('AirBook')
            }}>
            <ImageBackground
                source={require("../../assets/images/del.jpg")}
                style={styles.discoverItem}
                imageStyle={styles.discoverItemImage}
            >
            <Text>Airplane</Text>
            </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{
            navigation.navigate('TrainBook')
            }}>
            <ImageBackground
                source={require("../../assets/images/trainnn.jpg")}
                style={styles.discoverItem}
                imageStyle={styles.discoverItemImage}
            >
            <Text>Airplane</Text>
            </ImageBackground>
        </TouchableOpacity>
        </ScrollView>
        </View>

);
};
const styles= StyleSheet.create({
    discoverItem: {
        width: 350,
        height: 450,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginRight: 20,
    },
    discoverItemImage: {
        borderRadius: 20,
    },
    container:{
        flex:1,
        position:'relative'
    },
    svg:{
        position:'absolute',
        width: Dimensions.get('window').width
    },
    heading:{
        fontSize:32,
        fontWeight:"bold",
        top:-130,
        paddingLeft:10,
        alignSelf:'center',
        color:"#fff",
        textAlign:'center'
    },
    viewStyle:{
        alignContent:'center'
    }
})
export default TransportScreen;