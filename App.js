
import { StyleSheet, Text, View, Image } from "react-native";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen.js";
import SettingsScreen from "./screens/SettingsScreen.js";
import SavedScreen from "./screens/SavedScreen.js";
import MapScreen from "./screens/MapScreen.js";
import InfoScreen from "./screens/InfoScreen.js";

const homeIcon_active = require("./icons/Ui/home-active.png");
const homeIcon = require("./icons/Ui/home.png");
const compass_active = require("./icons/Ui/compass-active.png");
const compass = require("./icons/Ui/compass.png");
const saved_active = require("./icons/Ui/saved-active.png");
const saved = require("./icons/Ui/saved.png");
const settings_active = require("./icons/Ui/settings-active.png");
const settings = require("./icons/Ui/settings.png");

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Initial" component={HomeScreen} />
      <Stack.Screen name="Info" component={InfoScreen} />
    </Stack.Navigator>
  );
}
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name == "Home") {
              iconName = focused ? homeIcon_active : homeIcon;
            } else if (route.name == "Save") {
              iconName = focused ? saved_active : saved;
            } else if (route.name == "Settings") {
              iconName = focused ? settings_active : settings;
            } else if (route.name == "Map") {
              iconName = focused ? compass_active : compass;
            }
            return (
              <Image
                source={iconName}
                resizeMode="contain"
                style={styles.footerIcon}
              />
            );
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "black",
            position: "absolute",
            borderTopStartRadius: 40,
            borderTopEndRadius: 40,
            padding: 10,
          },
        })}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ title: "hi" }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Save" component={SavedScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  footerIcon: {
    width: 20,
  },
});
