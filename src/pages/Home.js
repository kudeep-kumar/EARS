import { ScrollView, Text, View } from "react-native";

import COLORS from "../../constants/colors";
import HomeCard from "../components/HomeCard";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <ScrollView style={{ marginTop: 30 }}>
      <View style={{ marginVertical: 22 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            color: COLORS.black,
            alignSelf: "center",
            marginTop: 10,
          }}>
          Home
        </Text>
      </View>
      <HomeCard
        name={"demo user"}
        emailId={"demouser@gmail.com"}
        title={"Assistant Professor"}
        phoneNumber={"+192312908390"}
        status={"applied"}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default Home;
