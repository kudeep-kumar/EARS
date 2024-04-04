import { COLORS_PAGES, FONTS } from "../../../constants/index";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import COLORS from "../../../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsAdmin = ({ navigation }) => {
  const navigateToEditProfile = () => {
    navigation.navigate("EditProfileAdmin");
  };

  const logout = () => {
    navigation.navigate("Login");
  };
  const navigateChangePassword = () => {
    navigation.navigate("ChangePassword");
  };

  const accountItems = [
    {
      icon: "person-outline",
      text: "Edit Profile",
      action: navigateToEditProfile,
    },
    { icon: "lock", text: "Change Password", action: navigateChangePassword },
    { icon: "logout", text: "Logout", action: logout },
  ];
  const renderSettingsItem = ({ icon, text, action }) => (
    <TouchableOpacity
      onPress={action}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        marginVertical: 8,
        paddingLeft: 12,
        backgroundColor: COLORS_PAGES.lightPurpule,
      }}>
      <MaterialIcons name={icon} size={24} color="black" />
      <Text
        style={{
          marginLeft: 36,
          ...FONTS.semiBold,
          fontWeight: 600,
          fontSize: 16,
        }}>
        {text}{" "}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS_PAGES.white,
      }}>
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: "row",
          justifyContent: "center",
        }}>
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: COLORS.black,
              alignSelf: "center",
              marginTop: 10,
            }}>
            Settings
          </Text>
        </View>
      </View>

      <ScrollView style={{ marginHorizontal: 12 }}>
        {/* Account Settings */}
        <View style={{ marginBottom: 12 }}>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: COLORS_PAGES.gray,
            }}>
            {accountItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsAdmin;
