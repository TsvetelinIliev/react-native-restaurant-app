import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import { NavigationContainer } from "@react-navigation/native";
import CartScreen from "../screens/CartScreen";

export default function RootNavigator() {

    const Tabs = createBottomTabNavigator();
    return (

        


            <Tabs.Navigator>
                <Tabs.Screen  name="HomeTab"  component={HomeNavigator} />
                <Tabs.Screen   name="Cart" component={CartScreen} />
                <Tabs.Screen  name="Info" component={() => <Text>Info Screen</Text>}  />
            </Tabs.Navigator>

       

    );
};