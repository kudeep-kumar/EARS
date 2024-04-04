import { COLORS_PAGES, images } from "../../constants";
import { Image, Text, TouchableOpacity, View } from "react-native";

import COLORS from "../../constants/colors";
import { FONTS } from "../../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

const HomeCard = ({
  title,
  emailId,
  name,
  phoneNumber,
  status,
  navigation,
  clickable,
}) => {
  return (
    <View
      style={{
        borderRadius: 12,
        marginTop: 10,
        // paddingHorizontal: 5,
      }}>
      <View
        style={{
          paddingVertical: 20,
          marginHorizontal: 10,
          flexDirection: "column",
          // alignItems: "center",
          backgroundColor: COLORS_PAGES.gray,
          height: 210,
          borderRadius: 40,
        }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={images.profile}
            resizeMode="contain"
            style={{
              height: 70,
              width: 70,
              borderRadius: 999,
              marginLeft: 20,
            }}
          />
          <View>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 10,
                ...FONTS.semiBold,
                fontWeight: 600,
                fontSize: 20,
              }}>
              Job Title
            </Text>
            <Text
              style={{
                marginLeft: 20,
                ...FONTS.semiBold,
                fontSize: 11,
              }}>
              ({title})
            </Text>
          </View>
          <View>
            {clickable ? (
              <TouchableOpacity
                onPress={() => navigation.navigate("ViewApplicantProfile")}
                style={{
                  marginLeft: 140,
                  marginTop: 14,
                  ...FONTS.semiBold,
                  fontWeight: 600,
                  fontSize: 14,
                  backgroundColor: COLORS_PAGES.darkPurpule,
                  color: COLORS.white,
                  padding: 5,
                  borderRadius: 10,
                  paddingHorizontal: 15,
                }}>
                <Text style={{ color: COLORS.white }}>View</Text>
              </TouchableOpacity>
            ) : (
              <Text
                style={{
                  marginLeft: 140,
                  marginTop: 14,
                  ...FONTS.semiBold,
                  fontWeight: 600,
                  fontSize: 14,
                  color: COLORS.green,
                }}>
                {status}
              </Text>
            )}
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              marginLeft: 25,
              ...FONTS.semiBold,
              fontSize: 13,
              fontWeight: "bold",
            }}>
            Name :{" "}
            <Text
              style={{
                marginLeft: 20,
                ...FONTS.semiBold,
                fontSize: 11,
                fontWeight: "normal",
              }}>
              {name}
            </Text>
          </Text>
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
              {emailId}
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
              {phoneNumber}
            </Text>
          </Text>
          <Text
            style={{
              marginLeft: 25,
              ...FONTS.semiBold,
              fontSize: 13,
              fontWeight: "bold",
            }}>
            Status :{" "}
            <Text
              style={{
                marginLeft: 20,
                ...FONTS.semiBold,
                fontSize: 11,
                fontWeight: "normal",
              }}>
              {status}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeCard;
