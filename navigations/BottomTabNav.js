import { Create, Home, Messages, Profile, Settings } from "../src/pages/index";
import {
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Platform, Text, View } from "react-native";

import COLORS from "./../constants/colors";
import { COLORS_PAGES } from "../constants";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: COLORS_PAGES.white,
  },
};
const BottomTabNav = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused
                    ? COLORS.primary
                    : COLORS_PAGES.white,
                  height: focused ? 65 : undefined,
                  width: focused ? 65 : undefined,
                  top: focused ? -20 : undefined,
                  borderRadius: Platform.OS == "ios" ? 25 : 30,
                }}>
                <FontAwesome
                  name="home"
                  size={24}
                  color={focused ? COLORS_PAGES.white : COLORS.primary}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Messages"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused
                    ? COLORS.primary
                    : COLORS_PAGES.white,
                  height: focused ? 65 : undefined,
                  width: focused ? 65 : undefined,
                  top: focused ? -20 : undefined,
                  borderRadius: Platform.OS == "ios" ? 25 : 30,
                }}>
                <MaterialIcons
                  name="person-outline"
                  size={24}
                  color={focused ? COLORS_PAGES.white : COLORS.primary}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused
                    ? COLORS.primary
                    : COLORS_PAGES.white,
                  height: focused ? 65 : undefined,
                  width: focused ? 65 : undefined,
                  top: focused ? -20 : undefined,
                  borderRadius: Platform.OS == "ios" ? 25 : 30,
                }}>
                <MaterialIcons
                  name="settings"
                  size={24}
                  color={focused ? COLORS_PAGES.white : COLORS.primary}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
