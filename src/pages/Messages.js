import { ScrollView, Text, View } from "react-native";

import NotificationList from "../components/NotificationList";
import React from "react";

const Messages = ({}) => {
  return (
    <View style={{ marginTop: 30 }}>
      <ScrollView>
        <NotificationList
          title={"Eglish Group"}
          subText={"If anyone Interested join this group"}
          status={"Now"}
        />
        <NotificationList
          title={"Eglish Group"}
          subText={"If anyone Interested join this group"}
          status={"10 min ago"}
        />
        <NotificationList
          title={"Eglish Group"}
          subText={"If anyone Interested join this group"}
          status={"1 day ago"}
        />
      </ScrollView>
    </View>
  );
};

export default Messages;
