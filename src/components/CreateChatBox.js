import * as ImagePicker from "expo-image-picker";

import { COLORS_PAGES, FONTS } from "../../constants";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import { MaterialIcons } from "@expo/vector-icons";
import userImage from "../../assets/user-bg.jpg";

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

const CreateChatBox = () => {
  const [tilteName, setTitleName] = useState("Unique Group");
  const [language, setLanguage] = useState("English");
  const [description, setDescription] = useState("Description");
  const [selectedImage, setSelectedImage] = useState(userImage);
  return (
    <View style={{ marginTop: 30 }}>
      <View
        style={{
          alignItems: "center",
          marginVertical: 22,
        }}>
        <TouchableOpacity onPress={handleImageSelection}>
          <Image
            source={selectedImage}
            style={{
              height: 170,
              width: 170,
              borderRadius: 85,
              borderWidth: 2,
              borderColor: COLORS_PAGES.yellow,
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
        <Text style={{ ...FONTS.h4, marginTop: 10 }}>Image</Text>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "column",
            marginBottom: 6,
          }}>
          <Text style={{ ...FONTS.h4 }}>Name</Text>
          <View
            style={{
              height: 44,
              width: "100%",
              borderColor: COLORS_PAGES.secondaryGray,
              borderWidth: 1,
              borderRadius: 4,
              marginVertical: 6,
              justifyContent: "center",
              paddingLeft: 8,
            }}>
            <TextInput
              value={tilteName}
              onChangeText={(value) => setTitleName(value)}
              editable={true}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            marginBottom: 6,
          }}>
          <Text style={{ ...FONTS.h4 }}>Tile</Text>
          <View
            style={{
              height: 44,
              width: "100%",
              borderColor: COLORS_PAGES.secondaryGray,
              borderWidth: 1,
              borderRadius: 4,
              marginVertical: 6,
              justifyContent: "center",
              paddingLeft: 8,
            }}>
            <TextInput
              value={language}
              onChangeText={(value) => setLanguage(value)}
              editable={true}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            marginBottom: 6,
          }}>
          <Text style={{ ...FONTS.h4 }}>Description</Text>
          <View
            style={{
              height: 44,
              width: "100%",
              borderColor: COLORS_PAGES.secondaryGray,
              borderWidth: 1,
              borderRadius: 4,
              marginVertical: 6,
              justifyContent: "center",
              paddingLeft: 8,
            }}>
            <TextInput
              value={description}
              onChangeText={(value) => setDescription(value)}
              editable={true}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS_PAGES.yellow,
            height: 44,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS_PAGES.white,
            }}>
            Create Your Chat Box
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateChatBox;
