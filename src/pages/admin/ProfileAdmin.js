import { COLORS_PAGES, FONTS, images } from "../../../constants/index";
import { Image, Text, View } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const ProfileAdmin = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS_PAGES.white,
      }}>
      <StatusBar backgroundColor={COLORS_PAGES.gray} />
      <View style={{ width: "100%" }}>
        <Image
          source={images.cover}
          resizeMode="cover"
          style={{
            height: 228,
            width: "100%",
          }}
        />
      </View>

      <View style={{ flex: 1, marginLeft: 20 }}>
        <Image
          source={images.profile}
          resizeMode="contain"
          style={{
            height: 155,
            width: 155,
            borderRadius: 999,

            marginTop: -90,
          }}
        />

        <Text
          style={{
            ...FONTS.h3,
            color: COLORS_PAGES.primary,
            marginVertical: 8,
            marginLeft: 55,
            fontWeight: "bold",
          }}>
          Admin
        </Text>
        <View
          style={{
            marginTop: 20,
            paddingVertical: 20,
            backgroundColor: COLORS_PAGES.gray,
            width: 410,
            borderRadius: 10,
            borderColor: COLORS_PAGES.lightPurpule,
            borderWidth: 2,
          }}>
          <Text
            style={{
              marginLeft: 25,
              ...FONTS.semiBold,
              fontSize: 13,
              fontWeight: "bold",
            }}>
            Email ID :{" "}
            <Text
              style={{
                marginLeft: 20,
                ...FONTS.semiBold,
                fontSize: 11,
                fontWeight: "normal",
              }}>
              admin@gmail.com
            </Text>
          </Text>
          <Text
            style={{
              marginLeft: 25,
              ...FONTS.semiBold,
              fontSize: 13,
              fontWeight: "bold",
            }}>
            Phone No. :{" "}
            <Text
              style={{
                marginLeft: 20,
                ...FONTS.semiBold,
                fontSize: 11,
                fontWeight: "normal",
              }}>
              +215648798754
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileAdmin;
