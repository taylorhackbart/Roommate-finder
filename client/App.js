import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Provider as PaperProvider,
  IconButton,
  DefaultTheme,
} from "react-native-paper";
import HomeScreen from "./pages/Welcome/index.js";
import Login from "./pages/Welcome/Login";
import Register from "./pages/Welcome/Register/Register";
import BackScreen from "./pages/Welcome/BackScreen";
import NameScreen from "./pages/Welcome/NameScreen";
import TitleScreen from "./pages/Welcome/Title";
import Housing from "./pages/Welcome/Register/Housing";
import Person from "./pages/Welcome/Register/Person";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerRight: () => (
                  <IconButton
                    icon="alert-outline"
                    onPress={() => alert("You're awesome!")}
                    color={DefaultTheme.colors.notification}
                  />
                ),
              }}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Name" component={NameScreen} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Person" component={Person} />
            <Stack.Screen name="Housing" component={Housing} />
            <Stack.Screen
              name="Title"
              component={TitleScreen}
              options={({ route }) => ({ title: route.params.title })}
            />
            <Stack.Screen name="Back" component={BackScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});
