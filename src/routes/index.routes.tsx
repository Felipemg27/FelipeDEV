import React,{useEffect}from "react";


import {createStackNavigator}from '@react-navigation/stack';
import Login from "../pages/login";
import BottomRoutes from "./bottom.routes";
import { themas } from "../global/themes";



export default function Routes (){
    const Stack = createStackNavigator();  

    return(

        <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{
                headerShown:false,
                cardStyle:{
                    backgroundColor:'#FFF'
                }
            }}
        >
            <Stack.Screen
                name="Login" 
                component={Login}
            />
            <Stack.Screen   
                name="BottomRoutes"
                component={BottomRoutes}
            />
          
        </Stack.Navigator>

    )
}
