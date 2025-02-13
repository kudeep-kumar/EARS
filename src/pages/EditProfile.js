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

import Button from "../../components/Button";
import COLORS from "../../constants/colors";
import { COLORS_PAGES } from "../../constants/index";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
import userImage from "../../assets/user-bg.jpg";

const EditProfile = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const [selectedValue, setSelectedValue] = useState("Select");
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

            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginVertical: 8,
                }}>
                Mobile Number
              </Text>

              <View
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: 22,
                }}>
                <TextInput
                  placeholder="+91"
                  placeholderTextColor={COLORS.black}
                  keyboardType="numeric"
                  style={{
                    width: "12%",
                    borderRightWidth: 1,
                    borderLeftColor: COLORS.grey,
                    height: "100%",
                  }}
                />

                <TextInput
                  placeholder="Enter your phone number"
                  placeholderTextColor={COLORS.black}
                  keyboardType="numeric"
                  style={{
                    width: "80%",
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
                Select Job Title
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
                  <Picker.Item label="Assistant Professor" value="option1" />
                  <Picker.Item label="Associate Professor" value="option2" />
                  <Picker.Item label="Research Assistant" value="option3" />
                  <Picker.Item label="Teaching Assistant" value="option4" />
                  <Picker.Item label="Department Chair" value="option5" />
                  <Picker.Item label="Dean" value="option6" />
                  <Picker.Item label="Librarian" value="option7" />
                  <Picker.Item label="Curriculum Developer" value="option8" />
                  <Picker.Item label="University Registrar" value="option9" />
                  <Picker.Item label="Research Scientist" value="option10" />
                </Picker>
              </View>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginVertical: 8,
                }}>
                Password
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
                  placeholder="Enter your password"
                  placeholderTextColor={COLORS.black}
                  secureTextEntry={isPasswordShown}
                  style={{
                    width: "100%",
                  }}
                />

                <TouchableOpacity
                  onPress={() => setIsPasswordShown(!isPasswordShown)}
                  style={{
                    position: "absolute",
                    right: 12,
                  }}>
                  {isPasswordShown == true ? (
                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                  ) : (
                    <Ionicons name="eye" size={24} color={COLORS.black} />
                  )}
                </TouchableOpacity>
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

export default EditProfile;
