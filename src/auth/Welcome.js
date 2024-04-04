import { Image, ImageBackground, Pressable, Text, View } from "react-native";

import Button from "../../components/Button";
import COLORS from "../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        opacity: 2,
        // backgroundColor: COLORS.primary,
      }}
      source={require("../../assets/login_bg.jpg")}
      colors={[COLORS.secondary, COLORS.primary]}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 400,
            width: "100%",
          }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 300,
              color: COLORS.white,
              alignSelf: "center",
            }}>
            Welcome! to Algoma
          </Text>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 300,
              color: COLORS.white,
              alignSelf: "center",
            }}>
            University
          </Text>
          <Button
            title="Register for a Job"
            onPress={() => navigation.navigate("Signup")}
            style={{
              marginTop: 22,
              width: "100%",
            }}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center",
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}>
              Already have an account ?
            </Text>
            {/* <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  fontWeight: "bold",
                  marginLeft: 4,
                }}>
                Login
              </Text>
            </Pressable> */}
          </View>
          <Button
            title="Login"
            onPress={() => navigation.navigate("Login")}
            style={{
              marginTop: 22,
              width: "100%",
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;
