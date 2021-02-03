
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import SignUp from "./src/screeens/SignUp"




const stack = createStackNavigator()



function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName ="SignUp">

        <stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>

      </stack.Navigator>
    </NavigationContainer>

  )
}

export default App