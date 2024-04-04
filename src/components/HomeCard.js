import { COLORS_PAGES, images } from "../../constants";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { FONTS } from "../../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

const HomeCard = ({ title, subText, status, navigation }) => {
  return (
    <View
      style={{
        borderRadius: 12,
        marginTop: 10,
        paddingHorizontal: 5,
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("ChatBox")}
        style={{
          backgroundColor: COLORS_PAGES.gray,
          paddingVertical: 20,
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
        }}>
        <Image
          source={images.profile}
          resizeMode="contain"
          style={{
            height: 70,
            width: 70,
            borderRadius: 999,
            borderColor: COLORS_PAGES.yellow,
            borderWidth: 2,
          }}
        />
        <View style={{}}>
          <Text
            style={{
              marginLeft: 20,
              ...FONTS.semiBold,
              fontWeight: 600,
              fontSize: 16,
            }}>
            {title}
          </Text>
          <Text
            style={{
              marginLeft: 20,
              ...FONTS.semiBold,
              fontSize: 11,
            }}>
            {subText}
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginLeft: 80,
              ...FONTS.semiBold,
              fontWeight: 600,
              fontSize: 16,
            }}>
            {status}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeCard;
