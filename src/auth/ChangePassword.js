import { Entypo, MaterialIcons } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import Button from "../../components/Button";
import COLORS from "../../constants/colors";
import { COLORS_PAGES } from "../../constants";
import Checkbox from "expo-checkbox";
import { SafeAreaView } from "react-native-safe-area-context";

const ChangePassword = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: "center",
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
      <View style={{ flex: 1, marginHorizontal: 22, marginVertical: 230 }}>
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 32,
              fontWeight: "bold",
              marginVertical: 12,
              color: COLORS.black,
              alignSelf: "center",
            }}>
            Change Password
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}>
            Old Password
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
              placeholder="Enter your old password"
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
            New Password
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
              placeholder="Enter your new password"
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
                <Entypo name="eye-off" size={24} color={COLORS.black} />
              ) : (
                <Entypo name="eye" size={24} color={COLORS.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 6,
          }}>
          <Checkbox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.primary : undefined}
          />

          <Text> Remember Me</Text>
        </View>

        <Button
          title="Change Password"
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
          onPress={() => navigation.navigate("BottomTabNavigation")}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;
