import HourlyAtmosphere from "@/components/HourlyAtmosphere";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const WEEKLY_WEATHER = [
  {
    day: "Mon",
    weather: "Mostly Bright",
    high: 29,
    low: 18,
  },
  {
    day: "Tue",
    weather: "Mostly Bright",
    high: 30,
    low: 19,
  },
  {
    day: "Wed",
    weather: "Showers Late",
    high: 29,
    low: 18,
  },
  {
    day: "Thu",
    weather: "Mostly Bright",
    high: 31,
    low: 20,
  },
  {
    day: "Fri",
    weather: "Mostly Bright",
    high: 30,
    low: 19,
  },
];

const OutLook = () => {
  const insets = useSafeAreaInsets()

  return (
    <ScrollView
      className="flex-1 p-4"
      contentContainerClassName="gap-5"
      contentContainerStyle={{
        paddingBottom: insets.bottom + 130,
      }}
    >
      <View className="gap-4">
        <Text className="text-brand-text-secondary tracking-[3px] font-semibold uppercase">
          Planing
        </Text>
        <Text className="text-brand-text-primary font-bold text-3xl">
          10-day outlook
        </Text>
      </View>
      <HourlyAtmosphere />
      <View className="gap-4 ">
        {WEEKLY_WEATHER.map((week) => (
          <View
            key={week.day}
            className="bg-white shadow-xl border-[1px] border-gray-100 p-4 rounded-[25px] justify-between flex-row items-center"
          >
            <View className="flex-row gap-3 items-center">
              <View>
                <Ionicons
                  name="partly-sunny-outline"
                  color="#FFBF00"
                  size={30}
                />
              </View>
              <View>
                <Text className="text-brand-text-primary font-semibold text-xl">
                  {week.day}
                </Text>
                <Text className="text-brand-text-secondary">
                  {week.weather}
                </Text>
              </View>
            </View>
            <View>
              <Text className="text-xl font-semibold">
                {week.high}
                {`\u00B0`} / {week.low}
                {`\u00B0`}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default OutLook;
