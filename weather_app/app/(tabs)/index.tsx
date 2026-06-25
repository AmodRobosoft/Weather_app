import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WeatherStatsGrid from "@/components/WeatherStatsGrid";
import LiveRader from "@/components/LiveRader";
import HourlyAtmosphere from "@/components/HourlyAtmosphere";
import Tripmode from "@/components/Tripmode";
import SavedClimate from "@/components/SavedClimate";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const TAB_BAR_HEIGHT = 70;
  const [weatherInfo, setWeatherInfo] = useState({
    temperature: 24,
    chanceOfRain: "20%",
  });
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: insets.bottom + 60 + TAB_BAR_HEIGHT,
      }}
      className="flex-1 px-4 pt-4 "
    >
      <View className="bg-[#7AD0C733] rounded-3xl overflow-hidden mb-10">
        <View className=" py-10 px-6 relative overflow-hidden">
          {Number(weatherInfo?.chanceOfRain?.replace("%", "")) < 50 ? (
            <Image
              source={require("../../assets/WeatherOrb.png")}
              className="absolute right-0 -top-3"
              resizeMode="contain"
            />
          ) : (
            <Image
              source={require("../../assets/rainClude.png")}
              className="absolute right-0 -top-3"
              resizeMode="contain"
            />
          )}

          <Text className="p-2 bg-white shadow-xl border-[1px] border-gray-100 w-40 rounded-full mb-4">
            {weatherInfo.chanceOfRain} chance of rain
          </Text>
          <View className=" py-10  rounded-3xl ">
            <View className="">
              <Text className="text-xl tracking-[3px] uppercase font-semibold text-gray-500">
                {Number(weatherInfo?.chanceOfRain?.replace("%", "")) < 50
                  ? "Partly Sunny"
                  : "Rain Later"}
              </Text>

              <Text className="text-[150px] font-extrabold ">
                {weatherInfo.temperature}
                {`\u00B0`}
              </Text>

              <Text className="text-2xl text-wrap">
                {Number(weatherInfo?.chanceOfRain?.replace("%", "")) < 50
                  ? "Abright, calm morning. Run before clouds build at 2 PM."
                  : "Showers roll in after 4 PM. Commute with a compact umbrella."}
              </Text>
            </View>
          </View>
        </View>

        <HourlyAtmosphere setWeatherInfo={setWeatherInfo} />
      </View>

      {/* Alert card */}
      <View className="p-6 bg-white shadow-xl rounded-3xl gap-4 relative overflow-hidden">
        <Image
          className="absolute right-0 top-0"
          source={require("../../assets/images/RedSmoke.png")}
        />
        <Pressable className="absolute bg-brand-primary py-2 px-4 items-center rounded-full right-4 top-6">
          <Text className="text-white text-sm">Track</Text>
        </Pressable>
        <View className="flex-row items-center">
          <Octicons name="shield" color="#C41B46" size={16} />
          <Text className="text-brand-primary text-sm"> Storm watch</Text>
        </View>
        <Text className="text-gray-400 w-72">
          Thunder cells may arrive around 6 PM. Alert buffer is already armed.
        </Text>
      </View>
      <WeatherStatsGrid />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerClassName=" gap-3 mt-10 "
      >
        <View className="bg-white rounded-3xl p-4 w-[300px] md:w-1/2">
          <LiveRader />
        </View>
        <View className="bg-white rounded-3xl p-4 w-[300px] md:w-1/2 ">
          <Tripmode />
        </View>
      </ScrollView>
      <SavedClimate />
    </ScrollView>
  );
};

export default HomeScreen;
