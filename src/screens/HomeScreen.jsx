
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {  getItemsByCategory } from "../data/menuItems";
import Card from "../components/Card";
import CategoryCard from "../components/CategoryCard";
import { useEffect, useState } from "react";
import { categoryApi, mealApi } from "../api";
import { RefreshControl } from "react-native";

//import { categories } from "../data/categoryData";


export default function HomeScreen({navigation}) {

    const [categories,setCategories] = useState([]);
    const [featured,setFeatured] = useState([]);
    const [toggleRefresh,setToggleRefresh] = useState(false);
    const[refreshing,setRefreshing] = useState(true);

    // useEffect(() => {
    //     categoryApi.getAll()
    //     .then(result => {
            
            
    //         setCategories(result.data);
            
    //     })
    //     .catch(err => {
    //         alert('Cannot load categories')
    //     });

    //     mealApi.getFeatured()
    //     .then(result => setFeatured(result.data))
    //     .catch(err => alert('Cannot get featured'));

    useEffect(() => {
        setRefreshing(true);

        async function fetchData(){
            
            try {

                const categoryResult = await mealApi.getAll();
                setCategories(categoryResult.data);
                const featuredResult = await mealApi.getFeatured();
                setFeatured(featuredResult.data)
                
            } catch (err) {

                alert('Cannot load data!');
                
            }finally {
                setRefreshing(false);
            }

           
            
        }

        fetchData();

    },[toggleRefresh]);

    


    const categoryPressHandler = (categoryId) => {
        navigation.navigate('Category', { categoryId });
        navigation.Cat
    };

    const itemPressHandler =(itemId) => {
        navigation.navigate('Details',{itemId});
    };

    const refreshHandler = () => {
        setFeatured(state => !state);
    }

    return (
<ScrollView 
   refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshHandler} />}
   

   >
  <View style={styles.header}   >
                  <Text style={styles.restaurantName}>Tasty Bites</Text>
                  <View style={styles.headerInfo}>
                      <Text style={styles.infoText}>⭐4.8 Rating</Text>
                      <Text style={styles.infoDot}>•</Text>
                      <Text style={styles.infoText}>🕐25-35 min</Text>
                  </View>
                  <Text style={styles.tagline}>Fresh & Delicious Food Delivered Fast</Text>
              </View>

              {/* Featured Section */}

            <View style={styles.section} >
                <Text style={styles.sectionTitle} >Featured Items</Text>

              <ScrollView  horizontal contentContainerStyle={{columnGap: 12,}} style={ styles.featuredList}  >

                    {featured.map((item) => (
                        <View key={item.id} style={styles.feauturedCard}>
                            <Card {...item} 
                            onPress={itemPressHandler}
                            />

                        </View>

                    ))}
                </ScrollView>

            </View>

            <View style={styles.section}  >
                <Text  style={styles.sectionTitle}>Categories</Text>
                {categories.map((category) => {
                    const itemCount = getItemsByCategory(category.id).length;
                    return <CategoryCard key={category.id} itemCount={itemCount} 
                    {...category}
                    onPress={categoryPressHandler}
                    />
                    
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        width: 200,
       

    },
    header: {
        backgroundColor: '#007AFF',
        padding: 24,
        paddingTop: 16,
        paddingBottom: 28,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    restaurantName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    headerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    infoText: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.9,
    },
    infoDot: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.6,
        marginHorizontal: 8,
    },
    tagline: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.8,
    },
    section: {
        padding: 16,
        paddingBottom: 8,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#333',
        marginBottom: 12,
    },
    featuredList: {
        paddingRight: 16,
        flexDirection: 'row',
        
    
       
        
        
    },
    featuredCard: {
        width: 200,
        marginRight: 12,
        //paddingRight: 12,
       
    },
    bottomPadding: {
        height: 24,
    },
    
});

