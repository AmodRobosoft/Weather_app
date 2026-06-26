import LiveRader from "@/components/LiveRader";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Maps = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      className="flex-1 p-4"
      contentContainerClassName="gap-5"
      contentContainerStyle={{
        paddingBottom: insets.bottom + 130,
      }}
    >
      <View className="gap-4 md:pt-10">
        <Text className="text-brand-text-secondary tracking-[3px] font-semibold uppercase">
          Map Layers
        </Text>
        <Text className="text-brand-text-primary font-bold text-3xl">
          Live Radar
        </Text>
      </View>
      <View className="bg-white p-6 rounded-[25px] pb-20">
        <LiveRader />
      </View>
      <View className="flex-row w-full gap-4">
        <View className="flex-1 basis-0 bg-white p-6 rounded-[25px]">
          <Text className="text-brand-text-secondary">Strom ETA</Text>
          <Text className="text-xl text-brand-text-primary font-semibold">
            42 min
          </Text>
        </View>

        <View className="flex-1 basis-0 bg-white p-6 rounded-[25px]">
          <Text className="text-brand-text-secondary">Confidence</Text>
          <Text className="text-xl text-brand-text-primary font-semibold">
            88%
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Maps;
