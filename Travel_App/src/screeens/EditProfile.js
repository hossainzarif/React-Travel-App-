import React, { useState } from "react"
import { Text, StyleSheet, View, Image, TouchableOpacity, TouchableNativeFeedback, Alert, TextInput } from "react-native"
import InputTaker from "../Reusable/InputTaker"
import { AntDesign } from '@expo/vector-icons'
import CurvedButtons from "../Reusable/CurvedButtons"
import ClearButton from "../Reusable/ClearButton"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import * as firebase from 'firebase';
import 'firebase/firestore';
import PhotoComponent from "../Reusable/PhotoComponent"
const iconsize = 17
const colorcode = "#606361"

const EditProfile = (props) => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState({})
    const [Password, setPassword] = useState("")
    // const { updateEmail, currentUser } = useAuth();

    // const doProfileUpdate = (profile) => {
    //     return (

    //         firebase
    //             .firestore()
    //             .collection("users")
    //             .doc(auth.currentUser.uid)
    //             .set(profile)
    //             .catch((error) => console.error("Error: ", error))
    //     );

    // };

    return (
        <View>
            <Text style={styles.LogoText}>Edit Profile</Text>

            <PhotoComponent/>

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
                placeholder=" Email-Address"
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
                    title="Update"
                    // style={styles.container}
                    onPress={
                        function () {

                            if (Name && Email && Password) {
                                firebase
                                    .auth()
                                    .createUserWithEmailAndPassword(Email, Password)
                                    .then((userCreds) => {
                                        alert(userCreds)
                                        userCreds.user.updateProfile({ displayName: Name })
                                        console.log(userCreds)

                                        firebase
                                            .firestore()
                                            .collection("users")
                                            .doc(userCreds.user.uid)
                                            .set({
                                                name: Name,
                                                email: Email,
                                            })
                                            .then(() => {

                                                console.log(userCreds.user);
                                                props.navigation.navigate("SignIn");
                                            })
                                            .catch((error) => {
                                                alert(error);
                                            });
                                    })
                                    .catch((error) => {
                                        alert(error);
                                    });
                            } else {
                                alert("Fields can not be empty!");
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
        </View>
    );
};

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
            marginBottom: 30,
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
);

export default EditProfile;