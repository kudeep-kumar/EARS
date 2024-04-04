import * as ImagePicker from "expo-image-picker";

import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import Button from "../../../components/Button";
import COLORS from "../../../constants/colors";
import { COLORS_PAGES } from "../../../constants/index";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import userImage from "../../../assets/user-bg.jpg";

const EditProfileAdmin = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(userImage);
  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS_PAGES.white,
        paddingHorizontal: 22,
      }}>
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: "row",
          justifyContent: "center",
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            left: 0,
            top: 20,
          }}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={COLORS_PAGES.black}
          />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View
          style={{
            alignItems: "center",
            marginTop: 12,
          }}>
          <TouchableOpacity onPress={handleImageSelection}>
            <Image
              source={selectedImage}
              style={{
                height: 170,
                width: 170,
                borderRadius: 85,
                borderWidth: 2,
              }}
            />

            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 10,
                zIndex: 9999,
              }}>
              <MaterialIcons
                name="photo-camera"
                size={32}
                color={COLORS_PAGES.primary}
              />
            </View>
          </TouchableOpacity>
        </View>

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
          <View style={{ flex: 1, marginHorizontal: 22 }}>
            <View>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  color: COLORS.black,
                  alignSelf: "center",
                }}>
                Edit your details
              </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginVertical: 8,
                }}>
                First Name
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
                <TextInput
                  placeholder="Enter your first name"
                  placeholderTextColor={COLORS.black}
                  style={{
                    width: "100%",
                  }}
                />
              </View>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginVertical: 8,
                }}>
                Last Name
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
                <TextInput
                  placeholder="Enter your last name"
                  placeholderTextColor={COLORS.black}
                  style={{
                    width: "100%",
                  }}
                />
              </View>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginVertical: 8,
                }}>
                Email ID
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
                <TextInput
                  placeholder="Enter your email id"
                  placeholderTextColor={COLORS.black}
                  style={{
                    width: "100%",
                  }}
                />
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileAdmin;
