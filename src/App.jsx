import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RootNavigator from './navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (

    <NavigationContainer>

      
         <StatusBar style="auto" /> 

        
        <RootNavigator />

    </NavigationContainer>
      
    
  );
}


