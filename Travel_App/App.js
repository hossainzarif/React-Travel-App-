
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import SignUp from "./src/screeens/SignUp"
import { AuthContext, AuthProvider } from "./src/Providers/AuthProvider"

import SignIn from "./src/screeens/SignIn"
import * as firebase from 'firebase' 
import HomePage from "./src/screeens/HomePage"

const AuthStack = createStackNavigator()
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
const HomeStack = () =>{
  return(
    <stack.Navigator initialRouteName ="HomePage">

    <stack.Screen name="HomePage" component={HomePage} />
    

  </stack.Navigator>
  )
}


const AuthStackScreen = () => {

  return (

    <AuthStack.Navigator
      initialRouteName="SignIn">
      <AuthStack.Screen name="SignUp" component={SignUp} options={{
        headerShown: false,
      }} />

      <AuthStack.Screen name="SignIn" component={SignIn} options={{
        headerShown: false,
      }} />

    </AuthStack.Navigator>
  )
}



function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) => (
          <NavigationContainer>
            {auth.isLoggedin ? <HomeStack /> : <AuthStackScreen />}
          </NavigationContainer>)}
      </AuthContext.Consumer>
    </AuthProvider>

  )
}

export default App
