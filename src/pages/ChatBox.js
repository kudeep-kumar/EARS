// ChatComponent.js

import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { COLORS_PAGES, images } from "../../constants";
import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

import { FONTS } from "./../../constants/theme";
import { GiftedChat } from "react-native-gifted-chat";

const ChatBox = ({ navigation }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };

  return (
    <>
      <View
        style={{
          borderRadius: 12,
          marginTop: 30,
          paddingHorizontal: 5,
        }}>
        <View
          style={{
            backgroundColor: COLORS_PAGES.gray,
            paddingVertical: 10,
            paddingHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
          }}>
          {/* <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              style={{ marginRight: 10 }}
              name="arrowleft"
              size={24}
              color={COLORS_PAGES.yellow}
            />
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              marginRight: 5,
            }}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color={COLORS_PAGES.black}
            />
          </TouchableOpacity>
          <Image
            source={images.profile}
            resizeMode="contain"
            style={{
              height: 50,
              width: 50,
              borderRadius: 999,
              borderColor: COLORS_PAGES.yellow,
              borderWidth: 2,
            }}
          />
          <View style={{}}>
            <Text
              style={{
                marginLeft: 20,
                ...FONTS.semiBold,
                fontWeight: 600,
                fontSize: 16,
              }}>
              Group Name
            </Text>
          </View>
          <TouchableOpacity>
            <MaterialIcons
              style={{ marginLeft: 100 }}
              name="person-outline"
              size={24}
              color={COLORS_PAGES.yellow}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                marginLeft: 20,
                ...FONTS.semiBold,
                fontWeight: 600,
                fontSize: 16,
              }}>
              Follow +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          _id: 1,
        }}
        messagesContainerStyle={{ marginBottom: 1000 }}
      />
    </>
  );
};

export default ChatBox;
