import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";


interface PropsType {
  setWeatherInfo?: React.Dispatch<
    React.SetStateAction<{
      temperature: number;
      chanceOfRain: string;
    }>
  >;
}




const HourlyAtmosphere = ({ setWeatherInfo }: PropsType) => {
  const [onClick, setOnClik] = useState(1);
  const forecastData = [
    {
      id: 1,
      date: "Now",
      status: "Sunny",
      temperature: 24,
      chanceOfRain: "2%",
    },
    {
      id: 2,
      date: "1 PM",
      status: "Cloudy",
      temperature: 23,
      chanceOfRain: "10%",
    },
    {
      id: 3,
      date: "2 PM",
      status: "Rainy",
      temperature: 22,
      chanceOfRain: "65%",
    },
    {
      id: 4,
      date: "3 PM",
      status: "Rainy",
      temperature: 21,
      chanceOfRain: "80%",
    },
    {
      id: 5,
      date: "4 PM",
      status: "Cloudy",
      temperature: 22,
      chanceOfRain: "35%",
    },
    {
      id: 6,
      date: "5 PM",
      status: "Sunny",
      temperature: 25,
      chanceOfRain: "5%",
    },
    {
      id: 7,
      date: "6 PM",
      status: "Sunny",
      temperature: 24,
      chanceOfRain: "3%",
    },
    {
      id: 8,
      date: "7 PM",
      status: "Cloudy",
      temperature: 22,
      chanceOfRain: "15%",
    },
    {
      id: 9,
      date: "8 PM",
      status: "Rainy",
      temperature: 20,
      chanceOfRain: "55%",
    },
    {
      id: 10,
      date: "9 PM",
      status: "Cloudy",
      temperature: 19,
      chanceOfRain: "20%",
    },
  ];
  const weatherIconMap: any = {
    Sunny: "sun",
    Cloudy: "cloud",
    Rainy: "cloud-rain",
  } as const;
  return (
    <View className="bg-white shadow-xl rounded-3xl p-4 gap-4">
      <View className="flex-row justify-between items-center ">
        <Text className="p-2 text-xl font-semibold">Hourly atmosphere</Text>
        <Pressable className="bg-gray-200 p-2 rounded-full">
          <Text className="text-brand-primary ">10 days</Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          gap: 12,
          paddingVertical: 20,
        }}
        contentContainerClassName=""
      >
        {forecastData.map((item) => {
          const isFocus = onClick === item.id;
          return (
            <Pressable
              onPress={() => {
                setWeatherInfo?.({
                  temperature: item.temperature,
                  chanceOfRain: item.chanceOfRain,
                });
                setOnClik(item.id);
              }}
              key={item.date}
              className={`${isFocus ? "bg-brand-primary" : "bg-white"} shadow-md boarder-[1px] border-gray-100 rounded-[25px] items-center justify-center gap-4 p-6`}
            >
              <Text
                className={`${isFocus ? "text-white" : "text-brand-text-primary"}`}
              >
                {item.date}
              </Text>
              <Feather
                name={weatherIconMap[item.status]}
                color="#FFBF00"
                size={30}
              />
              <View>
                <Text
                  className={`${isFocus ? "text-white" : "text-brand-text-primary"} text-xl text-center`}
                >
                  {item.temperature}
                  {`\u00B0`}
                </Text>
                <Text
                  className={`${isFocus ? "text-white" : "text-brand-text-primary"} text-center`}
                >
                  {item.chanceOfRain}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
      <View className="bg-gray-200 rounded-3xl overflow-hidden mt-2">
        <Text className="p-6 text-gray-500">
          Current window is ideal for errands and a short walk.
        </Text>
      </View>
    </View>
  );
};

export default HourlyAtmosphere;
