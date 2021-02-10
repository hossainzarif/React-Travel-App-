import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    FlatList,
    Alert,
    ScrollView
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Input, Button, Card, Tile } from 'react-native-elements';
import CurvedButtons from '../Reusable/CurvedButtons';
import Entypo from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase'
import InputTaker from '../Reusable/InputTaker';
import PostTaker from '../Reusable/PostTaker';
import CategoryPicker from '../screeens/CategoryPicker'
import PhotoComponent from '../Reusable/PhotoComponent';
import LocationPicker from '../screeens/LocationPicker';
import MultiSelect from 'react-native-multiple-select';

const PostPage = (props) => {

    const colorcode = "#606361"
    const [selcted, setselected] = useState([])
    const [selectedItems, setItems] = useState([])
    // const {data} = props.name

    const [image, setImage] = useState("");
    const org = "#db5e40"
    let multiSelect = ""

    //const [image, setImage] = useState('https://dummyimage.com/200x300/e0e0e0/e8e8e8.jpg&text=upload');
    let items = [{
        id: '92iijs7yta',
        name: 'Boating'
    }, {
        id: 'a0s0a8ssbsd',
        name: 'Trekking'
    }, {
        id: '16hbajsabsd',
        name: 'Surfing'
    }, {
        id: 'nahs75a5sg',
        name: 'Scuba diving'
    }, {
        id: '667atsas',
        name: 'Exploring'
    }, {
        id: 'hsyasajs',
        name: 'Canoeing'
    }, {
        id: 'djsjudksjd',
        name: 'Rafting'
    }, {
        id: 'sdhyaysdj',
        name: 'kayaking'
    }, {
        id: 'suudydjsjd',
        name: 'Zip-Lining'
    }
    ];
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


    const onSelectedItemsChange = (selectedItems) => {
        setItems(selectedItems)

    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [7, 7],
            quality: 1,
        });

        // console.log(result);

        if (!result.cancelled) {

            setImage(result.uri)
        }
    };

    const uploadImage = async () => {
        if (image == "") {
            console.log(props.route.params.item)
        }
        else {
            const response = await fetch(image)
            const blob = await response.blob()
            var ref = firebase.storage().ref().child("images/" + "Whattuops")
            ref.put(blob).then(() => {
                Alert.alert("Success")
            })
                .catch((error) => {
                    Alert.alert(error)
                })
        }
    }

    return (

        <ScrollView>


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
                        buttonStyle={{ borderRadius: 15, width: 130, height: 30, borderColor: org, color: org,borderWidth:1  }}
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
                        buttonStyle={{ borderRadius: 15, width: 130, height: 30, borderColor: org, color: org, marginLeft: 35 ,borderWidth:1 }}
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
                        buttonStyle={{ borderRadius: 15, backgroundColor: '#db5e40',}}
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

            <FlatList
                style={{marginTop:20,marginRight:20,marginLeft:15}}
                data={props.route.params.item}
                horizontal={true}
                showsHorizontalScrollIndicator={false}


                renderItem={({ item }) => {

                    return (
                        <Text style={{ fontSize: 15, borderWidth: 1, borderRadius: 15, borderColor: org, marginLeft: 10, padding: 5, margintop: 15 }}> {item}</Text>

                    )
                }
                }
            />
               


            <View style={{ marginTop: 20, marginBottom: 20 }}>
                <CurvedButtons
                    title="Post"
                    style={styles.container}
                    onPress={uploadImage}
                    color='#db5e40'
                    bgcolor='white'
                    widthpass={310}
                    heightpass={45}
                >
                </CurvedButtons>
            </View>








        </ScrollView>

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