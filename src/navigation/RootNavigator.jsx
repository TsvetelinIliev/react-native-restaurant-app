import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import { NavigationContainer } from "@react-navigation/native";
import CartScreen from "../screens/CartScreen";
import InfoScreen from "../screens/InfoScreen";
import HomeScreen from "../screens/HomeScreen";

export default function RootNavigator() {

    const Tabs = createBottomTabNavigator();
    return (




         <Tabs.Navigator >
       
                    <Tabs.Screen
                        name="HomeTab"
                        component={HomeNavigator}
                        options={{
                        
                            
                            headerShown: false
                        }}
                    />
            <Tabs.Screen name="Cart" component={CartScreen} />
            <Tabs.Screen name="Info" component={InfoScreen} />
        </Tabs.Navigator>



    );
};