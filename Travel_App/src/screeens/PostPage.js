import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Input, Button, Card, Tile } from 'react-native-elements';
import CurvedButtons from '../Reusable/CurvedButtons';
import Entypo from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'expo-image-picker';

import InputTaker from '../Reusable/InputTaker';
import PostTaker from '../Reusable/PostTaker';
import CategoryPicker from '../screeens/CategoryPicker'
import PhotoComponent from '../Reusable/PhotoComponent';
import LocationPicker from '../screeens/LocationPicker';

const PostPage = (props) => {

    const colorcode = "#606361"



    const [image, setImage] = useState('https://dummyimage.com/200x300/e0e0e0/e8e8e8.jpg&text=upload');
    const org = "#db5e40"
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert('Need Camera and Media Permisson');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [7, 7],
            quality: 5,
        });

        // console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };


    return (

        <View>

            <Card containerStyle={styles.cardViewStyle}>
                <View>
                    <Text style={{ alignSelf: "flex-start", fontSize: 20, color: 'dimgray', fontWeight: "bold", marginBottom: 10 }}>
                        Post!
            </Text>
                </View>

                <PostTaker
                    leftIcon={<Entypo name="location-pin" size={22} color={colorcode} />}
                    placeholder="Headline of blog."
                    widthpass={300}
                    heightpass={50}
                    keyboardType="default"
                // onChangeText={
                //     // function (currentInput) {
                //     //     setName(currentInput)
                //     // }
                // }
                >
                </PostTaker>


                <PostTaker
                    leftIcon={<Entypo name="location-pin" size={22} color={colorcode} />}
                    placeholder="Share your recent adventure."
                    widthpass={300}
                    heightpass={160}
                    keyboardType="default"
                // onChangeText={
                //     // function (currentInput) {
                //     //     setName(currentInput)
                //     // }
                // }
                >
                </PostTaker>



                <View style={{ marginTop: 10, height: 30, flexDirection: 'row' }}>
                    <Button
                        buttonStyle={{ borderRadius: 15, width: 130, height: 30, borderColor: org, color: org, }}
                        icon={{
                            name: "list",
                            size: 20,
                            color: "gray"
                        }}
                        title="Category"
                        titleStyle={{ color: "#db5e40" }}
                        type="outline"

                        onPress={
                            function () {
                                props.navigation.navigate("CategoryPicker")
                            }
                        }
                    />

                    <Button
                        buttonStyle={{ borderRadius: 15, width: 130, height: 30, borderColor: org, color: org, marginLeft: 35 }}
                        icon={{
                            name: "location-pin",
                            size: 20,
                            color: "gray"
                        }}
                        title="Location"
                        titleStyle={{ color: "#db5e40" }}
                        type="outline"

                        onPress={
                            function () {
                                props.navigation.navigate("LocationPicker")
                            }
                        }
                    />

                </View>


                <View style={{ marginTop: 20 }}>
                    <Button
                        buttonStyle={{ borderRadius: 15, backgroundColor: '#db5e40' }}
                        icon={{
                            name: "photo",
                            size: 20,
                            color: "white"
                        }}
                        title="Upload Image"
                        raised={true}
                        onPress={pickImage}
                    />
                </View>




            </Card>


            <View style={{ marginTop: 40 }}>
                <CurvedButtons
                    title="Post"
                    // style={styles.container}
                    // onPress={
                    //     async function () {


                    //         if (Email && Password) {
                    //             firebase
                    //                 .auth()
                    //                 .signInWithEmailAndPassword(Email, Password)
                    //                 .then((userCreds) => {
                    //                     auth.setisLoggedin(true);
                    //                     auth.setCurrentUser(userCreds.user);
                    //                 })
                    //                 .catch((error) => {
                    //                     alert(error);
                    //                 });

                    //             //props.navigation.navigate("Home")
                    //         }
                    //     }
                    // }
                    color='#db5e40'
                    bgcolor='white'
                    widthpass={310}
                    heightpass={45}
                >
                </CurvedButtons>
            </View>

        </View>


    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },


        cardViewStyle: {
            // justifyContent: 'center',
            borderRadius: 20,
            elevation: 5,
            marginTop: 100,
            height: 410,
            width: 330


        },
    })

export default PostPage;