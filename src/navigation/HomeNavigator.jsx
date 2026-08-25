import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen";
import { TouchableOpacity, View } from "react-native";
import CategoryScreen from "../screens/CategoryScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { Ionicons } from "@expo/vector-icons";


export default function HomeNavigator() {

    const Stack =createNativeStackNavigator();

    return (

        <Stack.Navigator screenOptions={({navigation}) => ({
            headerRight: () => {

                return (
                    <TouchableOpacity  onPress={() => navigation.navigate('CartModal')} >

                        <Ionicons name="cart" size={24} color="black" style={{marginRight: 15 }}/>

                    </TouchableOpacity>
                )
            }
        })} >

            

           
            <Stack.Screen  name="Home" component={HomeScreen} />
            <Stack.Screen  name="Category" component={CategoryScreen} />
            <Stack.Screen  name="Details" component={DetailsScreen} />
            

            

            

        </Stack.Navigator>


    ) 



    
}