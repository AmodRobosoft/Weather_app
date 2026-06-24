import {
  AntDesign,
  Feather,
  FontAwesome,
  Ionicons,
  Octicons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ImageBackground,
  StyleSheet,
} from "react-native";

const LiveRader = () => {
  const switchItems = [
    {
      name: "Rain",
      icon: <Octicons name="stack" color="#000" size={20} />,
    },
    {
      name: "Strom",
      icon: <Octicons name="stack" color="#000" size={20} />,
    },
    {
      name: "Wind",
      icon: <Octicons name="stack" color="#000" size={20} />,
    },
  ];

  const raindBands = [
    {
      band: "Light",
      color: "#7AD0C7",
    },
    {
      band: "Modarate",
      color: "#061A6999",
    },
    {
      band: "Heavy",
      color: "#FF4D67B2",
    },
  ];

  return (
    <View className="w-full rounded-3xl gap-5">
      <View className="flex-row justify-between items-center">
        <View className="flex-row gap-4">
          <Feather name="map" size={24} />
          <Text className="text-xl">Live radar</Text>
        </View>
        <Pressable className="py-2 px-4 bg-[#7AD0C780] rounded-full">
          <Text className="text-xl ">LIVE</Text>
        </Pressable>
      </View>
      <Text className="text-xl text-brand-text-secondary">
        Brooklyn precipitation map · +2 hr
      </Text>
      <ImageBackground
        source={require("../assets/images/radermapbg.png")}
        style={styles.mapBg}
        imageStyle={styles.mapBgImage}
      >
        <View className="p-2 justify-between h-full">
          <View className="flex-row justify-between items-center">
            <View className="bg-[#02061873] p-2 rounded-[25px] w-24 justify-center items-center">
              <Text className="text-brand-text-secondary font-semibold tracking-widest w-full pl-2">
                LAYER
              </Text>
              <Text className="text-white w-full pl-2">Rainfall</Text>
            </View>
            <View className="gap-2 bg-[#02061873] p-2 rounded-full">
              <View className="p-2 bg-[#FFFFFF33] rounded-full">
                <AntDesign name="plus" color="#fff" />
              </View>
              <View className="p-2 bg-[#FFFFFF33] rounded-full">
                <AntDesign name="minus" color="#fff" />
              </View>
            </View>
          </View>
          <View className="bg-[#02061873] rounded-[25px] p-4 gap-4">
            <View className="flex-row justify-between items-center">
              <Text className="font-bold text-white">Forecast +2 hr</Text>
              <FontAwesome name="play" color="#fff" size={20} />
            </View>
            <View className="flex-row gap-2">
              <View className="bg-[#FFFFFFBF] rounded-full p-2">
                <Text className="font-bold">Brooklyn</Text>
              </View>
              <View className="bg-[#FFFFFFBF] rounded-full p-2">
                <Text className="font-bold">Queens</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View className="flex-row gap-2 w-full">
        {switchItems.map((item, index) => {
          return (
            <View
              key={item.name}
              className="flex-1 basis-0 bg-white shadow-xl shadow-black items-center px-6 rounded-[25px] py-2"
            >
              {item.icon}
              <Text className="">{item.name}</Text>
            </View>
          );
        })}
      </View>
      <View className="p-4 gap-2 flex-row flex-wrap bg-[#E5E7EB] rounded-[25px]">
        <View className="flex-row gap-4">
          {raindBands.map((item, index) => (
            <View key={item.band} className="items-center gap-2">
              <View
                style={{
                  backgroundColor: item.color,
                  height: 8,
                  borderRadius: 50,
                  width: 30,
                }}
              />
              <Text className="text-sm">{item.band}</Text>
            </View>
          ))}
        </View>
        <Text className="text-wrap">
          Rain band reaches Brooklyn in 45 min.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapBg: {
    width: "100%",
    height: 250,
  },
  mapBgImage: {
    borderRadius: 24,
  },
});
export default LiveRader;
