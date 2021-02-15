import React, { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView, Image, ScrollView, ImageBackground, Touchable, TouchableOpacity, Alert } from "react-native";
import { Input, Button, Card, Tile, Text, Header, Avatar } from 'react-native-elements';
import { FlatList, } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import colors from '../../assets/colors/colors';
import { Entypo, Feather, AntDesign } from '@expo/vector-icons';
import { AuthContext } from "../Providers/AuthProvider";
import PlaceDetails from '../screeens/PlaceDetails';
import * as firebase from "firebase";
import "firebase/firestore";
import HeaderComponent from "../Reusable/HeaderComponent";
import * as ImagePicker from 'expo-image-picker';


const ProfileScreen = ({ }) => {




    const [imgarray, setimg] = useState([])
    const [numberOfPosts, setNumberOfPosts] = useState(0);
    // const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [image, setImage] = useState('https://dummyimage.com/200x300/e0e0e0/e8e8e8.jpg&text=upload');

    //console.log(props.userId);

    // useEffect(() => {

    //     (async () => {
    //         if (Platform.OS !== 'web') {
    //             const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
    //             if (status !== 'granted') {
    //                 alert('Need Camera and Media Permisson');
    //             }
    //         }


    //         // setprops();


    //     })();
    // }, []);



    const pickImage = async (auth) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [7, 7],
            quality: 1,
        });




        // console.log(result);

        if (!result.cancelled) {

            setImage(result.uri)

            const response = await fetch(image)
            const blob = await response.blob()
            var ref = firebase.storage().ref().child("ProfilePicture/" + toString(auth.CurrentUser.uid))
            ref.put(blob).then(() => {
                ref.getDownloadURL().then((downloadURL) => {

                    firebase
                        .firestore()
                        .collection("users").doc(auth.CurrentUser.uid).collection("profilepicture").doc(auth.CurrentUser.uid).set
                        ({

                            url: downloadURL,

                        }).then
                    {
                        Alert.alert("Profile Picture Updated")
                    }


                }

                )
            })


        }
    };









    // const loadPosts = async () => {
    //     // if (props.userId == auth.CurrentUser.uid) {

    //     firebase
    //         .firestore()
    //         .collection("users").doc(auth_id).collection("profilepicture").doc(auth_id)
    //         .onSnapshot((querySnapshot) => {
    //             let temp_posts = [];
    //             querySnapshot.forEach((doc) => {
    //                 temp_posts.push({
    //                     id: doc.id,
    //                     data: doc.data(),
    //                 });
    //             });
    //             setimg(temp_posts)

    //         })
    //         .catch((error) => {
    //             alert(error);
    //         });
    //     // }
    // }

    // useEffect(() => {
    //     loadPosts()
    // }, []);


    let postsButton = " ";
    postsButton = numberOfPosts.toString();


    const renderDiscoverItem = ({ item }) => {
        const image = { uri: item.data.url };

        return (
            <AuthContext.Consumer>
                {(auth) => (

                    <TouchableOpacity
                        onPress={() =>

                            props.navigation.navigate('PlaceDetails', {

                                items: item,
                                auth_id: auth.CurrentUser.uid
                            })
                        }>
                        <ImageBackground

                            source={image}
                            style={[
                                styles.discoverItem,
                                { marginLeft: item.id === 'discover-1' ? 20 : 0 },
                            ]}
                            imageStyle={styles.discoverItemImage}>
                            <Text style={styles.discoverItemTitle}>{item.data.postheader}</Text>
                            <View style={styles.discoverItemLocationWrapper}>
                                <Entypo name="location-pin" size={18} color={colors.white} />
                                <Text style={styles.discoverItemLocationText}>{item.data.locationName}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                )}
            </AuthContext.Consumer>
        );
    };

    return (
        <AuthContext.Consumer>
            {(auth) => (


                <SafeAreaView style={styles.container}>

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <HeaderComponent />
                        <SafeAreaView>

                            <TouchableOpacity onPress={
                                function () {


                                    props.navigation.navigate("EditProfile")
                                }
                            }>
                                <View style={styles.editWrapper}>

                                    <Text style={{ fontSize: 20, color: "#6b778d" }}> Edit Profile </Text>
                                    <Entypo name="edit" size={20} color="#6b778d" />
                                </View>
                            </TouchableOpacity>


                        </SafeAreaView>


                        <View style={{ alignSelf: "center" }}>

                            <TouchableOpacity

                                onPress={() =>

                                    pickImage(auth)
                                }


                            >


                                <View style={styles.profileImage}>



                                    <Image source={{ uri: image }} style={styles.image} resizeMode="center"></Image>



                                </View>
                            </TouchableOpacity>

                            <View style={styles.dm}>
                                <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
                            </View>
                            <View style={styles.active}></View>
                            <View style={styles.add}>
                                <Ionicons name="ios-add" size={48} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
                            </View>
                        </View>

                        <View style={styles.infoContainer}>
                            <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}> {auth.CurrentUser.displayName} </Text>
                            <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>{auth.CurrentUser.email}</Text>
                        </View>



                        <View style={styles.statsContainer}>

                            <View style={styles.statsBox}>
                                <Text style={[styles.text, { fontSize: 24 }]}>20</Text>
                                <Text style={[styles.text, styles.subText]}>Media</Text>
                            </View>

                            <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                                <Text style={[styles.text, { fontSize: 24 }]}>454</Text>
                                <Text style={[styles.text, styles.subText]}>Followers</Text>
                            </View>
                            <View style={styles.statsBox}>
                                <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
                                <Text style={[styles.text, styles.subText]}>Following</Text>
                            </View>
                        </View>

                        <View style={styles.discoverWrapper}>
                            {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={styles.mediaImageContainer}>
                                    <Image source={require("../../assets/images/media1.jpg")} style={styles.image} resizeMode="cover"></Image>
                                </View>
                                <View style={styles.mediaImageContainer}>
                                    <Image source={require("../../assets/images/media2.jpg")} style={styles.image} resizeMode="cover"></Image>
                                </View>
                                <View style={styles.mediaImageContainer}>
                                    <Image source={require("../../assets/images/media3.jpg")} style={styles.image} resizeMode="cover"></Image>
                                </View>
                            </ScrollView> */}
                            <View style={styles.discoverItemsWrapper} >

                                <FlatList
                                    data={posts}
                                    renderItem={renderDiscoverItem}
                                    keyExtractor={(item) => item.id}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />

                            </View>
                            <View style={styles.mediaCount}>
                                <Text style={[styles.text, { fontSize: 24, color: "#DFD8C8", fontWeight: "300" }]}>{postsButton}</Text>
                                <Text style={[styles.text, { fontSize: 12, color: "#DFD8C8", textTransform: "uppercase" }]}>Posts</Text>
                            </View>
                        </View>
                        <Text style={[styles.subText, styles.recent]}>Recent Activity</Text>
                        <View style={{ alignItems: "center" }}>
                            <View style={styles.recentItem}>
                                <View style={styles.activityIndicator}></View>
                                <View style={{ width: 250 }}>
                                    <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                        Started following <Text style={{ fontWeight: "400" }}>Jake Challeahe</Text> and <Text style={{ fontWeight: "400" }}>Luis Poteer</Text>
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.recentItem}>
                                <View style={styles.activityIndicator}></View>
                                <View style={{ width: 250 }}>
                                    <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                        Started following <Text style={{ fontWeight: "400" }}>Luke Harper</Text>
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            )}
        </AuthContext.Consumer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    editWrapper: {
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: "#52575D"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    dm: {
        backgroundColor: "#db5e40",
        position: "absolute",
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    active: {
        backgroundColor: "#00bd56",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#db5e40",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1,
        marginLeft: 15


    },
    discoverItemsWrapper: {
        paddingVertical: 20,
        marginLeft: 10
    },
    discoverItem: {
        width: 170,
        height: 200,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginRight: 20,
    },
    discoverItemImage: {
        borderRadius: 20,

    },
    discoverItemTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.white,
    },
    discoverItemLocationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    discoverItemLocationText: {
        marginLeft: 5,
        fontFamily: 'Lato-Bold',
        fontSize: 14,
        color: colors.white,
    },
    discoverWrapper: {
        // marginHorizontal: 20,
        marginTop: 20,
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#db5e40",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    }
});

export default ProfileScreen;