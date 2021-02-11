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
import "firebase/firestore";
import { AuthContext } from "../Providers/AuthProvider"

const PostPage = (props) => {

    let durl = ""
    const colorcode = "#606361"
    const [selcted, setselected] = useState([])
    const [selectedItems, setItems] = useState([])
    const [location, setlocation] = useState("")
    const [download, setdownload] = useState("")

    // input takers.
    const [Header, setHeaderName] = useState("")
    const [blog, setBlog] = useState("")
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


            // setprops();
            setselected(props.route.params.item)

        })();
    }, []);


    const onSelectedItemsChange = (selectedItems) => {
        setItems(selectedItems)

    };


    const setprops = () => {

        setselected(props.route.params.item)


    }
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

    const uploadImage = async (auth) => {
        if (image == "") {
            console.log(selcted)

            console.log(location)


        }
        else {
            const response = await fetch(image)
            const blob = await response.blob()
            var ref = firebase.storage().ref().child("images/" + Header)
            ref.put(blob).then(() => {
                ref.getDownloadURL().then((downloadURL) => {

                    firebase
                        .firestore()
                        .collection("posts")
                        .add({
                            userId: auth.CurrentUser.uid,
                            author: auth.CurrentUser.displayName,
                            postheader: Header,
                            postbody: blog,
                            url: downloadURL,
                            time: firebase.firestore.Timestamp.now(),
                            categories: props.route.params.item,
                            locationName: props.route.params.location


                        })
                        .then((docref) => {
                            Alert.alert("DONE");
                            //alert(auth.CurrentUser.sid)
                        })
                        .catch((error) => {
                            alert(error);
                        });


                }

                )
            })
                .catch((error) => {
                    Alert.alert(error)
                })
        }
    }

    return (


        <AuthContext.Consumer>
            {(auth) => (



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
                            onChangeText={
                                function (currentInput) {
                                    setHeaderName(currentInput)
                                }
                            }
                        >
                        </PostTaker>


                        <PostTaker
                            leftIcon={<Entypo name="location-pin" size={22} color={colorcode} />}
                            placeholder="Share your recent adventure."
                            widthpass={300}
                            heightpass={160}
                            keyboardType="default"
                            onChangeText={
                                function (currentInput) {
                                    setBlog(currentInput)
                                }
                            }
                        >
                        </PostTaker>



                        <View style={{ marginTop: 10, height: 30, flexDirection: 'row' }}>
                            <Button
                                buttonStyle={{ borderRadius: 15, width: 130, height: 30, borderColor: org, color: org, borderWidth: 1, alignContent: "center", paddingBottom: 10, paddingRight: 15 }}
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
                                        setlocation(props.route.params.location)

                                        props.navigation.navigate("CategoryPicker")
                                    }
                                }
                            />

                            <Button
                                buttonStyle={{ borderRadius: 15, width: 130, height: 30, borderColor: org, color: org, marginLeft: 35, borderWidth: 1, paddingBottom: 10, paddingRight: 15 }}
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
                                        props.navigation.navigate("LocationPicker", { item: props.route.params.item })

                                    }
                                }
                            />

                        </View>


                        <View style={{ marginTop: 20 }}>
                            <Button
                                buttonStyle={{ borderRadius: 15, backgroundColor: '#db5e40', }}
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
                        style={{ marginTop: 20, marginRight: 20, marginLeft: 10 }}
                        data={props.route.params.item}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}


                        renderItem={({ item }) => {

                            return (
                                <View style={{ marginHorizontal: 5 }}>
                                    <Text style={{ fontSize: 15, borderWidth: 1, borderRadius: 15, borderColor: org, padding: 5, }}> {item}</Text>
                                </View>
                            )
                        }
                        }
                    />
                    <View style={{ marginTop: 20, marginRight: 20, marginLeft: 15, alignContent: "center", alignSelf: "center", width: 200 }}
                    >

                        {props.route.params.location == "" ? <Text style={{ fontSize: 15, borderWidth: 1, borderRadius: 15, borderColor: org, padding: 5, textAlign: "center" }}>
                            Choose Location
                    </Text> : <Text style={{ fontSize: 15, borderWidth: 1, borderRadius: 15, borderColor: org, padding: 5, textAlign: "center" }}>
                                {props.route.params.location}
                            </Text>}


                    </View>

                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                        <CurvedButtons
                            title="Post"
                            style={styles.container}
                            onPress=
                            {() => uploadImage(auth)}


                            color='#db5e40'
                            bgcolor='white'
                            widthpass={310}
                            heightpass={45}
                        >
                        </CurvedButtons>
                    </View>








                </ScrollView>
            )}
        </AuthContext.Consumer>
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