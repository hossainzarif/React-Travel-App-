import React, { useState } from "react"
import { Text, StyleSheet, View,ScrollView } from "react-native"
import { color } from "react-native-reanimated"
import CurvedButtons from "../Reusable/CurvedButtons"
import ClearButton from "../Reusable/ClearButton"
import InputTaker from "../Reusable/InputTaker"
import { AntDesign } from '@expo/vector-icons';
import OutlineButton from "../Reusable/OutlineButton"
import { AuthContext } from "../Providers/AuthProvider"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from "firebase";
import BackLogo from './../Reusable/BackLogo';

const iconsize = 17
const colorcode = "#606361"

const SignIn = (props) => {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")


    return (

        <AuthContext.Consumer>
            {  (auth) => (

<<<<<<< Updated upstream
                <View >
=======
                <ScrollView>
>>>>>>> Stashed changes
                    <View>
                        <BackLogo/>
                        <Ionicons name="md-logo-react" size={150} color="white" style={styles.logoStyle}/>
                        <Text style={{fontSize:35,alignSelf:"center",color:"white",fontWeight:"bold",padding:80, marginVertical:100}}>TraVac</Text>
                    </View>
                    <View style={styles.container}>
                    <View style={{marginTop:130}}>
                        <Text style={{ alignSelf: "center", fontSize: 20, color: 'dimgray', fontWeight: "bold", marginBottom: 10 }}>
                            Welcome!
                        </Text>
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
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <CurvedButtons
                            title="Sign In"
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
                            heightpass={80}
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
<<<<<<< Updated upstream
                    </View>
                </View>)}
=======
                </ScrollView>)}
>>>>>>> Stashed changes

        </AuthContext.Consumer>


    )
}

const styles = StyleSheet.create(
    {
        container:
        {
            marginTop:-200,
            justifyContent: 'center',
            alignItems: 'center',
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

        }
        ,
        logoStyle:{
            justifyContent:"center",
            alignSelf:"center",
            resizeMode: 'cover',
            marginVertical:-190,
            paddingBottom:20,
            
        }


    }
)

export default SignIn;