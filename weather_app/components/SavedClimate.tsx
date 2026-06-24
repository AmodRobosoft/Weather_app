import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SavedClimate = () => {
  const climates = [
    {
      city: "Tokyo",
      text: "Selected location",
      gradientColors: ["#C41B4699", "#FFD6A899"],
      tempature: 31,
    },
    {
      city: "Reykjavík",
      text: "North wind",
      gradientColors: ["#A2F4FDB2", "#51A2FF80"],
      tempature: 8,
    },
    {
      city: "Lisbon",
      text: "Golden hour",
      gradientColors: ["#FEE685CC", "#FFA1AD80"],
      tempature: 22,
    },
  ];

  return (
    <View className="px-4 py-6">
      <Text className="text-xl font-bold mb-4">Saved climates</Text>

      <View className="gap-4">
        {climates.map((item) => (
          <View
            key={item.city}
            className="bg-white shadow-xl rounded-[25px] overflow-hidden border-gray-50/10 border-[1px]"
          >
            <LinearGradient
              colors={item.gradientColors}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[{ padding: 20 }]}
            >
              <View className="flex-row justify-between items-center">
                <View>
                  <Text className="text-xl font-semibold">{item.city}</Text>

                  <Text className="">{item.text}</Text>
                </View>
                <Text className="text-3xl font-bold">
                  {item.tempature}
                  {`\u00B0`}
                </Text>
              </View>
            </LinearGradient>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SavedClimate;
