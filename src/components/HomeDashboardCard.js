import { COLORS_PAGES, images } from "../../constants";
import { Image, Text, TouchableOpacity, View } from "react-native";

import COLORS from "../../constants/colors";
import { FONTS } from "../../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

const HomeDashboardCard = ({ title, navigation, totalNumber, action }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          action();
        }}
        style={{
          paddingVertical: 20,
          marginHorizontal: 5,
          marginVertical: 10,
          backgroundColor: COLORS_PAGES.darkPurpule,
          height: 210,
          width: 210,
          borderRadius: 20,
        }}>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: COLORS.white,
              alignSelf: "flex-end",
              marginRight: 25,
            }}>
            {totalNumber}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: COLORS.white,
              alignSelf: "center",
              marginVertical: 40,
            }}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default HomeDashboardCard;
