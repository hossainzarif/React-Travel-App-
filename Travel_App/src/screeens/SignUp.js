import React, { useState } from "react"
import { Text, StyleSheet, View, Image, TouchableOpacity, TouchableNativeFeedback, Alert, TextInput } from "react-native"
import InputTaker from "../Reusable/InputTaker"
import { AntDesign } from '@expo/vector-icons'
import CurvedButtons from "../Reusable/CurvedButtons"
import ClearButton from "../Reusable/ClearButton"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
const iconsize = 17
const colorcode = "#606361"

const SignUp = () => {

    const [Name, setName] = useState("")
    const [SID, setsId] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")


    return (


        <View>
            <Text style={{ fontSize: 28, fontWeight: "bold", alignSelf: "center", marginTop: 50 }}>Welcome To Myblog</Text>
            <Text style={styles.LogoText}>Sign Up</Text>
            <InputTaker
                leftIcon={<AntDesign name="user" size={iconsize} color={colorcode} />}
                placeholder=" Username"
                widthpass={300}
                heightpass={50}
                keyboardType="default"
                onChangeText={
                    function (currentInput) {
                        setName(currentInput)
                    }
                }
            >
            </InputTaker>

            <InputTaker
                leftIcon={<MaterialCommunityIcons name="email-outline" size={16} color={colorcode} />}
                placeholder=" Email-adreress"
                widthpass={300}
                heightpass={50}
                keyboardType="email-address"
                onChangeText={
                    function (currentInput) {
                        setEmail(currentInput)
                    }
                }
            >
            </InputTaker>

            <InputTaker
                leftIcon={<AntDesign name="lock" size={iconsize} color={colorcode} />}

                placeholder=" Password"
                widthpass={300}
                heightpass={50}
                keyboardType="default"
                onChangeText={
                    function (currentInput) {
                        setPassword(currentInput)
                    }
                }
                bool={true}
            >
            </InputTaker>

            <View style={{ marginTop: 40 }}> 
                 <CurvedButtons
                    title="Sign Up"
                    // style={styles.container}
                    onPress={
                        function () {

                           // if (Name && SID && Email && Password) {
                            //     firebase
                            //       .auth()
                            //       .createUserWithEmailAndPassword(Email, Password)
                            //       .then((userCreds) => {
                            //         userCreds.user.updateProfile({ displayName: Name });
                            //         firebase
                            //           .firestore()
                            //           .collection("users")
                            //           .doc(userCreds.user.uid)
                            //           .set({
                            //             name: Name,
                            //             sid: SID,
                            //             email: Email,
                            //           })
                            //           .then(() => {
                            //             alert(userCreds.user.uid)
                            //             console.log(userCreds.user);
                            //             props.navigation.navigate("SignIn");
                            //           })
                            //           .catch((error) => {
                            //             alert(error);
                            //           });
                            //       })
                            //       .catch((error) => {
                            //         alert(error);
                            //       });
                            //   } else {
                            //     alert("Fields can not be empty!");
                            //   }} 
                        }  
                    }
                    color='#db5e40'
                    bgcolor='white'
                    widthpass={300}
                    heightpass={45}
                >
                </CurvedButtons> 
            
            </View>
        
        </View>




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
            marginTop: 30,
            marginBottom: 70,
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

    }
)

export default SignUp