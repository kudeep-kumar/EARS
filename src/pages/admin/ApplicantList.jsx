import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import COLORS from "../../../constants/colors";
import { COLORS_PAGES } from "../../../constants";
import HomeCard from "../../components/HomeCard";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

const ApplicantList = ({ navigation }) => {
  return (
    <ScrollView style={{ marginTop: 30 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: "absolute",
          left: 30,
          top: 38,
        }}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={24}
          color={COLORS_PAGES.black}
        />
      </TouchableOpacity>
      <View style={{ marginVertical: 22 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            color: COLORS.black,
            alignSelf: "center",
            marginTop: 10,
          }}>
          New Applicants List
        </Text>
      </View>
      <HomeCard
        name={"demo user"}
        emailId={"demouser@gmail.com"}
        title={"Assistant Professor"}
        phoneNumber={"+192312908390"}
        status={"applied"}
        navigation={navigation}
        clickable={true}
      />
      <HomeCard
        name={"demo user"}
        emailId={"demouser@gmail.com"}
        title={"Assistant Professor"}
        phoneNumber={"+192312908390"}
        status={"applied"}
        navigation={navigation}
        clickable={true}
      />
    </ScrollView>
  );
};

export default ApplicantList;
