import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import { NavigationContainer } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";

const DrawerTab = createDrawerNavigator();

const DrawerNavigation = () => {
  const data = useSafeAreaInsets();
  console.log(data);

  return (
    <NavigationContainer>
      <DrawerTab.Navigator
        screenOptions={{
          drawerActiveTintColor: "red",
          drawerInactiveTintColor: "Yellow",
        }}
      >
        <DrawerTab.Screen name="Home" component={Home} />
        <DrawerTab.Screen name="Settings" component={Contact} />
      </DrawerTab.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;