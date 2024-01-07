import styles from "./home.style";

import { Iceland_400Regular } from "@expo-google-fonts/iceland";
import { useFonts } from "expo-font";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";


export default function HomeScreen() {
    const navigation = useNavigation();

    const [fontsLoaded, error] = useFonts({
        "iceland": Iceland_400Regular,
        // "rubik": require("../../../../assets/fonts/Rubik-Regular.ttf"),
    });

    if (!fontsLoaded) {
        console.log("Fonts not loaded");
        console.log(error);
        return null;
    }
    
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>TriviaQuizzz</Text>
          {/* <Text style={styles.qm}>?</Text> */}
        </View>
        <Button
          icon="arrow-right-circle"
          mode="contained"
          onPress={() => navigation.navigate("Categories")}
          buttonColor="#D9FFF5"
          textColor="#1D1E18"
          style={{
            width: "50%",
            margin: "auto",
            marginVertical: 20,
            // backgroundColor: "#3f51b5",
            // color: "#fff",
          }}
        >
          Enter
        </Button>
      </View>
    );
    }
