import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import { View } from "react-native";


export default function HomeNavigator() {

    const Stack =createNativeStackNavigator();

    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}  >

            

           
            <Stack.Screen  name="Home" component={HomeScreen} />
            

            

        </Stack.Navigator>


    ) 



    
}