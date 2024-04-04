import HomeCard from "../components/HomeCard";
import React from "react";
import { ScrollView } from "react-native";

const Home = ({ navigation }) => {
  return (
    <ScrollView style={{ marginTop: 30 }}>
      <HomeCard
        title={"Eglish Group"}
        subText={"If anyone Interested join this group"}
        status={"Active"}
        navigation={navigation}
      />
      <HomeCard
        title={"French language Group"}
        subText={"If anyone Interested join this group"}
        status={"Ofline"}
        navigation={navigation}
      />
      <HomeCard
        title={"Germen language Group"}
        subText={"If anyone Interested join this group"}
        status={"Ofline"}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default Home;
