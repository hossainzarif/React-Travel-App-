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

const SignIn = (props) => {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")


    return (

        <AuthContext.Consumer>
            {  (auth) => (
                <View>

                    <Text style={styles.LogoText}>Sign In</Text>

                    <View>
                        <Text style={{ alignSelf: "flex-start", fontSize: 20, color: 'dimgray', fontWeight: "bold", marginLeft: 30, marginBottom: 10 }}>
                            Welcome!
                        </Text>
                    </View>

                    <InputTaker
                        leftIcon={<MaterialCommunityIcons name="email-outline" size={16} color={colorcode} />}
                        placeholder=" Email-address"
                        widthpass={300}
                        heightpass={50}
                        bool={false}
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
                        bool={true}
                        onChangeText={
                            function (currentInput) {
                                setPassword(currentInput)
                            }
                        }

                    >
                    </InputTaker>

                    <View style={{ marginTop: 60 }}>
                        <CurvedButtons
                            title="Sign In"
                            // style={styles.container}
                            onPress={
                                async function () {


                                    if (Email && Password) {
                                        firebase
                                            .auth()
                                            .signInWithEmailAndPassword(Email, Password)
                                            .then((userCreds) => {
                                                auth.setisLoggedin(true);
                                                auth.setCurrentUser(userCreds.user);
                                            })
                                            .catch((error) => {
                                                alert(error);
                                            });

                                        //props.navigation.navigate("Home")
                                    }
                                }
                            }
                            color='#db5e40'
                            bgcolor='white'
                            widthpass={300}
                            heightpass={45}
                        >
                        </CurvedButtons>

                    </View>
                    <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "center", }}>


                        <Text style={styles.TextStyle}>Already Have an Account?</Text>
                        <ClearButton
                            title=" Sign Up"
                            onPress={
                                function () {
                                    props.navigation.navigate("SignUp")
                                }
                            }
                        >
                        </ClearButton>
                    </View>
                </View>
                
                )}

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

export default SignIn