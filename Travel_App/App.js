
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import SignUp from "./src/screeens/SignUp"

import SignIn from "./src/screeens/SignIn"
import * as firebase from 'firebase' 


const stack = createStackNavigator()

var firebaseConfig = {
  apiKey: "AIzaSyCgBLecv8Prt262KoQXh_ntyp1jMEHPMnQ",
  authDomain: "travel-app-963dc.firebaseapp.com",
  projectId: "travel-app-963dc",
  storageBucket: "travel-app-963dc.appspot.com",
  messagingSenderId: "933961659260",
  appId: "1:933961659260:web:3284a16d6403087243eaf9"
};
if(!firebase.apps.length)
{
  firebase.initializeApp(firebaseConfig)
}
function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName ="SignUp">

        <stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
        <stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>

      </stack.Navigator>
    </NavigationContainer>

  )
}

export default App