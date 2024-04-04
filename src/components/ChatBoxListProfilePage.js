import { COLORS_PAGES, images } from "../../constants";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { FONTS } from "./../../constants/theme";
import React from "react";

const ChatBoxListProfilePage = ({ title, subText, status }) => {
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
          paddingVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 5,
        }}>
        <Image
          source={images.profile}
          resizeMode="contain"
          style={{
            height: 50,
            width: 50,
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

export default ChatBoxListProfilePage;
