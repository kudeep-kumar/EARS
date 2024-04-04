import { COLORS_PAGES, FONTS, images } from "../../../constants/index";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import Button from "../../../components/Button";
import COLORS from "../../../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const ViewApplicantProfile = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("Select");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS_PAGES.white,
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: "absolute",
          left: 30,
          top: 60,
        }}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={24}
          color={COLORS_PAGES.black}
        />
      </TouchableOpacity>
      <StatusBar backgroundColor={COLORS_PAGES.gray} />

      <View
        style={{
          flex: 1,
          marginTop: 140,
          alignItems: "center",
        }}>
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
            fontWeight: "bold",
          }}>
          Demo User
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
              demouser@gmail.com
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
              Applied
            </Text>
          </Text>
        </View>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
          <View style={{ flex: 1, marginHorizontal: 22 }}>
            <View style={{ marginBottom: 12, width: 400 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginVertical: 8,
                }}>
                Change Satatus
              </Text>
              <View
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 22,
                }}>
                <Picker
                  selectedValue={selectedValue}
                  style={{
                    width: "100%",
                  }}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                  }>
                  <Picker.Item label="Select" value="Select" />
                  <Picker.Item label="In Progress" value="option1" />
                  <Picker.Item label="Rejected" value="option2" />
                  <Picker.Item label="Approved" value="option3" />
                </Picker>
              </View>
            </View>
            <View style={{ marginBottom: 12, width: 400 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginVertical: 8,
                }}>
                Add Remarks
              </Text>
              <View
                style={{
                  width: "100%",

                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 22,
                }}>
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  style={{
                    width: "100%",
                    height: 200,
                  }}></TextInput>
              </View>
            </View>

            <Button
              title="Submit"
              filled
              style={{
                marginTop: 18,
                marginBottom: 4,
              }}
            />
          </View>
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
};

export default ViewApplicantProfile;
