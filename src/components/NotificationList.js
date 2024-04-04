import { COLORS_PAGES, images } from "../../constants";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { FONTS } from "./../../constants/theme";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

const NotificationList = ({ title, subText, status }) => {
  return (
    <View
      style={{
        borderRadius: 12,
        marginTop: 10,
        paddingHorizontal: 5,
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: COLORS_PAGES.gray,
          paddingVertical: 20,
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
        }}>
        <FontAwesome name="bell" size={40} color={COLORS_PAGES.yellow} />
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
              marginLeft: 100,
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

export default NotificationList;
