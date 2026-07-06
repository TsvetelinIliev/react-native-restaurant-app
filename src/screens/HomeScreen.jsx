import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";


export default function HomeScreen() {

    return (
            <View style={styles.section} >
                <Text style={styles.sectionTitle} >Featured Items</Text>

                <View style={styles.featuredList} >

                    {featuredItems.map((item) => (
                        <View key={item.id} >
                            <Card {...item} />

                        </View>
    )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});