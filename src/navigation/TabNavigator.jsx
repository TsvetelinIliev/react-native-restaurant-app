import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import { NavigationContainer } from "@react-navigation/native";
import CartScreen from "../screens/CartScreen";
import InfoScreen from "../screens/InfoScreen";
import HomeScreen from "../screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";

export default function TabNavigator() {

    const Tabs = createBottomTabNavigator();
    return (




         <Tabs.Navigator >
       
                    <Tabs.Screen
                        name="HomeTab"
                        component={HomeNavigator}
                        options={{

                            tabBarIcon: ({color,size}) => <Ionicons name="home"  size={size} color={color}  />,
                        
                            headerShown: false,
                            
                        }}
                    />
            <Tabs.Screen name="Cart" 
            component={CartScreen} 
            options={{

                            tabBarIcon: ({color,size}) => <Ionicons name="cart"  size={size} color={color}  />,
                        
                            
                            
                        }}

            />
            <Tabs.Screen name="Info" 
            component={InfoScreen} 
            options={{

                            tabBarIcon: ({color,size}) => <Ionicons name="information-circle"  size={size} color={color}  />,
                        
                           
                        }}
            />
        </Tabs.Navigator>



    );
};