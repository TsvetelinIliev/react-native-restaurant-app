import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import { View } from "react-native";
import CategoryScreen from "../screens/CategoryScreen";


export default function HomeNavigator() {

    const Stack =createNativeStackNavigator();

    return (

        <Stack.Navigator >

            

           
            <Stack.Screen  name="Home" component={HomeScreen} />
            <Stack.Screen  name="Category" component={CategoryScreen} />
            

            

        </Stack.Navigator>


    ) 



    
}