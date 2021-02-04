import React, { useState } from "react"
import { Text, StyleSheet, View } from "react-native"
import { color } from "react-native-reanimated"
import CurvedButtons from "../Reusable/CurvedButtons"
import ClearButton from "../Reusable/ClearButton"
import InputTaker from "../Reusable/InputTaker"
import { AntDesign } from '@expo/vector-icons';
import OutlineButton from "../Reusable/OutlineButton"
import { AuthContext } from "../Providers/AuthProvider"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as firebase from "firebase";


const iconsize = 17
const colorcode = "#606361"

const HomePage= (props) => {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")


    return (

        <AuthContext.Consumer>
            {  (auth) => (<View>




            </View>)}

        </AuthContext.Consumer>


    )
}

const styles = StyleSheet.create(
    {
        container:
        {
            margin: 50
        },


        LogoText:
        {
            fontSize: 25,
            color: 'black',
            alignSelf: "center",
            marginTop: 50,
            marginBottom: 100,
            fontWeight: 'bold',
        },
        placeholdertext:
        {
            fontSize: 15,
            color: 'black',

        },

        passwordContainer: {
            flexDirection: 'row',
        },
        inputStyle: {
            flex: 1,
        },
        TextStyle: {
            fontSize: 16,
            justifyContent: "center",
            alignSelf: "center",
            elevation: 10,
            color: "dimgray"

        },



    }
)

export default HomePage