import styles from "./categories.style";

import { View, Text } from "react-native";
import { useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CategoriesScreen() {
    const navigation = useNavigation();
    const [categories, setCategories] = useState(null);
    
    getCategories = async () => {
        const response = await fetch("https://opentdb.com/api_category.php");
        const data = await response.json();
        all_categories = data.trivia_categories;
        // console.log(all_categories);
        setCategories(all_categories);
    }
    if (categories == null){
        getCategories();
    }
    // console.log(categories);
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Categories</Text>
        <ScrollView style={{ marginTop: 20 }}>
        {!categories && (
            <ActivityIndicator
              animating={true}
              size={"large"}
              color="#AAD2BA"
            />
          ) }
          <View style={styles.cat_grid}>
          {categories && (
            categories.map((category) => {
              return (
                <Button
                  mode="contained"
                  buttonColor="#AAD2BA"
                  textColor="#1D1E18"
                  theme={{ roundness: 10, radius: 10, version: 3 }}
                  key={category.id}
                  style={{
                    marginBottom: 10,
                    borderRadius: 10,
                    paddingVertical: 2,
                  }}
                  onPress={() =>
                    navigation.navigate("Question", {
                      category_id: category.id,
                      category_name: category.name,
                    })
                  }
                >
                  {category.name}
                </Button>
              );
            })
          )}
          </View>
        </ScrollView>
      </View>
    );
}
