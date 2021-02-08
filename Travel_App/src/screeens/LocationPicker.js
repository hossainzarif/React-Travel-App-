import React, { useState } from "react"
import { Text, StyleSheet, View, Image, TouchableOpacity, TouchableNativeFeedback, Alert, TextInput } from "react-native"
import InputTaker from "../Reusable/InputTaker"
import { AntDesign } from '@expo/vector-icons'
import CurvedButtons from "../Reusable/CurvedButtons"
import ClearButton from "../Reusable/ClearButton"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import * as firebase from 'firebase'
import 'firebase/firestore'
import { FontAwesome } from '@expo/vector-icons';

const LocationPicker = (props) => {

    const iconsize = 17
    const colorcode = "#606361"



    const [Location, setLocation] = useState("")

    return (
        <View style={styles.container}>

            <View style={{marginTop:90,}}>
                <InputTaker

                    leftIcon={<FontAwesome name="search" size={22} color="#db5e40" />}
                    placeholder="  Search location"
                    widthpass={320}
                    heightpass={50}
                    keyboardType="default"
                    onChangeText={
                        function (currentInput) {
                            setLocation(currentInput)
                        }
                    }
                >

                </InputTaker>
            </View>
            <View style={{marginTop:80 }}>
                <Text style={{ justifyContent: "center", alignSelf: "center" ,fontSize:23,color:"#db5e40"}}>
                    Search for Location.
            </Text>
            </View>
        </View>




    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: "column"
    },
});

export default LocationPicker