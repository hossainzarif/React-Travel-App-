import React, { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView, Image, ScrollView, ImageBackground, StatusBar ,Alert} from "react-native";
import { Input, Button, Card, Tile, Text, Header, Avatar } from 'react-native-elements';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import colors from '../../assets/colors/colors';
import { Entypo, Feather, AntDesign } from '@expo/vector-icons';
import { AuthContext } from "../Providers/AuthProvider";
import * as firebase from "firebase";
import "firebase/firestore";


const HeaderComponent = (props) => {




    return (
        <AuthContext.Consumer>
            {(auth) => (

                <View>



                    <Header
                        backgroundColor="#db5e40"

                        centerComponent={{ text: 'TraVac', style: { color: "white", justifyContent: "center", fontSize: 24 } }}

                        rightComponent={{
                            icon: "lock-outline",
                            color: "white",
                            size: 30,
                            onPress: function () {

                                Alert.alert(
                                    "Are you sure to Log Out?",
                                    "Press ok to Log Out",
                                    [
                                      {
                                        text: "Cancel",
                                        onPress: () => console.log("Cancel Pressed"),
                                        style: "cancel"
                                      },
                                      {
                                        text: "OK", onPress: () => {
              
                                            firebase
                                            .auth()
                                            .signOut()
                                            .then(() => {
                                                auth.setisLoggedin(false);
                                                auth.setCurrentUser({});
                                            })
                                            .catch((error) => {
                                                alert(error);
                                            })
                                        }
              
              
              
                                      }
                                    ],
                                    { cancelable: false }
                                  );








                               
                            },
                        }}
                    />
                </View>

            )}
        </AuthContext.Consumer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },

});

export default HeaderComponent;