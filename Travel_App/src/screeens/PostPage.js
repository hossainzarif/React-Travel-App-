import React,{ useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
} from 'react-native';
import { Input, Button, Card, Tile } from 'react-native-elements';
import CurvedButtons from '../Reusable/CurvedButtons';
import Entypo from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'expo-image-picker';

import InputTaker from '../Reusable/InputTaker';
import PostTaker from '../Reusable/PostTaker';
import PhotoComponent from '../Reusable/PhotoComponent';

const PostPage = () => {

    const colorcode = "#606361"



    const [image, setImage] = useState( 'https://dummyimage.com/200x300/e0e0e0/e8e8e8.jpg&text=upload');

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
                    placeholder="Share your recent adventure.."
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

                <View style={{ marginTop: 10 }}>
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
           

            <View style={{ marginTop: 30 }}>
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
            marginTop: 150,
            height: 300,
            width: 330


        },
    })

export default PostPage