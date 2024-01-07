import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './App.styles';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Iceland_400Regular } from "@expo-google-fonts/iceland";
import { useFonts } from "expo-font";

import HomeScreen from "./src/screens/components/home/home";
import CategoriesScreen from './src/screens/components/categories/categories';
import QuestionScreen from './src/screens/components/question/question';
import { PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator();


export default function App() {

  const [fontsLoaded, error] = useFonts({
    "iceland": Iceland_400Regular,
  });
  
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, animation: 'simple_push' }}/>
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{ headerShown: false, animation: 'slide_from_right' }}/>
        <Stack.Screen name="Question" component={QuestionScreen} options={{ headerShown: false, animation: 'slide_from_right' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

