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
import Checkbox from "expo-checkbox";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailIdChange = (text) => {
    setEmailId(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  console.log("emailId", emailId);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: "center",
      }}>
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
            Login
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}>
            Email address
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
              placeholder="Enter your email address"
              placeholderTextColor={COLORS.black}
              style={{
                width: "100%",
              }}
              onChangeText={handleEmailIdChange}
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
              onChangeText={handlePasswordChange}
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
          title="Login"
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
          onPress={() => {
            emailId === "admin@gmail.com" && password === "Admin@123"
              ? navigation.navigate("BottomTabNavAdmin")
              : navigation.navigate("BottomTabNavUser");
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 22,
          }}>
          <Text style={{ fontSize: 16, color: COLORS.black }}>
            Don't have an account ?{" "}
          </Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: "bold",
                marginLeft: 6,
              }}>
              Register for a job
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
