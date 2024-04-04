import { ScrollView, Text, View } from "react-native";

import COLORS from "../../../constants/colors";
import HomeDashboardCard from "../../components/HomeDashboardCard";
import React from "react";

const HomeDashboardAdmin = ({ navigation }) => {
  const totalEmployeClick = () => {
    navigation.navigate("TotalEmloyeesList");
  };
  const totalApplicantClick = () => {
    navigation.navigate("ApplicantList");
  };
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
          Dashboard
        </Text>
      </View>
      <View
        style={{
          borderRadius: 12,
          marginTop: 10,
          paddingHorizontal: 5,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "auto",
          height: "100%",
        }}>
        <HomeDashboardCard
          totalNumber={"5"}
          title={"Total Emloyees"}
          action={totalEmployeClick}
        />
        <HomeDashboardCard
          totalNumber={"2"}
          title={"New Applicants"}
          action={totalApplicantClick}
        />
      </View>
    </ScrollView>
  );
};

export default HomeDashboardAdmin;
