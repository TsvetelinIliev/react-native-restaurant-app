import { Text, View } from "react-native";

export default function CategoryScreen({ route }) {
    const { categoryId } = route.params;

    alert(`Category Id: ${categoryId}`)

    return (

        <View>
            <Text>Category screen</Text>
        </View>
    )
}