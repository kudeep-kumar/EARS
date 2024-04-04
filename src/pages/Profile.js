import { COLORS_PAGES, FONTS, SIZES, images } from "../../constants/index";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

import ChatBoxListProfilePage from "../components/ChatBoxListProfilePage";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { photos } from "../../constants/index";

const FollowerRoutes = () => (
  <ScrollView>
    <ChatBoxListProfilePage
      title={"Eglish Group"}
      subText={"If anyone Interested join this group"}
      status={"View"}
    />
  </ScrollView>
);

const FollowingRoutes = () => (
  <ScrollView>
    <ChatBoxListProfilePage
      title={"Eglish Group"}
      subText={"If anyone Interested join this group"}
      status={"View"}
    />
  </ScrollView>
);

const renderScene = SceneMap({
  first: FollowerRoutes,
  second: FollowingRoutes,
});

const Profile = ({ navigation }) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "first", title: "Follower" },
    { key: "second", title: "Following" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: COLORS_PAGES.yellow,
      }}
      style={{
        backgroundColor: COLORS_PAGES.white,
        height: 44,
      }}
      renderLabel={({ focused, route }) => (
        <Text
          style={[
            { color: focused ? COLORS_PAGES.black : COLORS_PAGES.black },
          ]}>
          {route.title}
        </Text>
      )}
    />
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS_PAGES.white,
      }}>
      <StatusBar backgroundColor={COLORS_PAGES.gray} />
      <View style={{ width: "100%" }}>
        <Image
          source={images.cover}
          resizeMode="cover"
          style={{
            height: 228,
            width: "100%",
          }}
        />
      </View>

      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={images.profile}
          resizeMode="contain"
          style={{
            height: 155,
            width: 155,
            borderRadius: 999,
            borderColor: COLORS_PAGES.yellow,
            borderWidth: 2,
            marginTop: -90,
          }}
        />

        <Text
          style={{
            ...FONTS.h3,
            color: COLORS_PAGES.primary,
            marginVertical: 8,
          }}>
          Melissa Peters
        </Text>
        <Text
          style={{
            color: COLORS_PAGES.black,
            ...FONTS.body4,
          }}>
          Interior designer
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 6,
            alignItems: "center",
          }}>
          <MaterialIcons name="location-on" size={24} color="black" />
          <Text
            style={{
              ...FONTS.body4,
              marginLeft: 4,
            }}>
            Lagos, Nigeria
          </Text>
        </View>

        <View
          style={{
            paddingVertical: 8,
            flexDirection: "row",
          }}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: SIZES.padding,
            }}>
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS_PAGES.primary,
              }}>
              122
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS_PAGES.primary,
              }}>
              Followers
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: SIZES.padding,
            }}>
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS_PAGES.primary,
              }}>
              67
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS_PAGES.primary,
              }}>
              Followings
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: SIZES.padding,
            }}>
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS_PAGES.primary,
              }}>
              77K
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS_PAGES.primary,
              }}>
              Likes
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("EditProfile")}
            style={{
              width: 124,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS_PAGES.yellow,
              borderRadius: 10,
              marginHorizontal: SIZES.padding * 2,
            }}>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS_PAGES.white,
              }}>
              Edit Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 124,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS_PAGES.yellow,
              borderRadius: 10,
              marginHorizontal: SIZES.padding * 2,
            }}>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS_PAGES.white,
              }}>
              Add Friend
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1, marginHorizontal: 22, marginTop: 20 }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
