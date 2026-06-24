import { Feather } from '@expo/vector-icons';
import React from 'react'
import { View,Text,FlatList,Pressable, ScrollView } from 'react-native';
const HourlyAtmosphere = () => {
    const forecastData = [
      {
        date: "Now",
        status: "Sunny",
        temperature: "24",
        chanceOfRain: "2%",
      },
      {
        date: "1 PM",
        status: "Cloudy",
        temperature: "23",
        chanceOfRain: "10%",
      },
      {
        date: "2 PM",
        status: "Rainy",
        temperature: "22",
        chanceOfRain: "65%",
      },
      {
        date: "3 PM",
        status: "Rainy",
        temperature: "21",
        chanceOfRain: "80%",
      },
      {
        date: "4 PM",
        status: "Cloudy",
        temperature: "22",
        chanceOfRain: "35%",
      },
      {
        date: "5 PM",
        status: "Sunny",
        temperature: "25",
        chanceOfRain: "5%",
      },
      {
        date: "6 PM",
        status: "Sunny",
        temperature: "24",
        chanceOfRain: "3%",
      },
      {
        date: "7 PM",
        status: "Cloudy",
        temperature: "22",
        chanceOfRain: "15%",
      },
      {
        date: "8 PM",
        status: "Rainy",
        temperature: "20",
        chanceOfRain: "55%",
      },
      {
        date: "9 PM",
        status: "Cloudy",
        temperature: "19",
        chanceOfRain: "20%",
      },
    ];
     const weatherIconMap: any = {
       Sunny: "sun",
       Cloudy: "cloud",
       Rainy: "cloud-rain",
     } as const;
  return (
    <View className="bg-white shadow-lg rounded-3xl p-4 gap-4">
      <View className="flex-row justify-between items-center ">
        <Text className="p-2 text-xl font-semibold">Hourly atmosphere</Text>
        <Pressable className="bg-gray-200 p-2 rounded-full">
          <Text className="text-brand-primary ">10 days</Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}
      >
        {forecastData.map((item) => (
          <View
            key={item.date}
            className="bg-brand-primary rounded-full items-center justify-center gap-4 p-6"
          >
            <Text className="text-gray-200">{item.date}</Text>
            <Feather
              name={weatherIconMap[item.status]}
              color="#FFBF00"
              size={30}
            />
            <View>
              <Text className="text-white text-xl text-center">
                {item.temperature}
                {`\u00B0`}
              </Text>
              <Text className="text-white text-center">
                {item.chanceOfRain}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View className="bg-gray-200 rounded-3xl overflow-hidden mt-2">
        <Text className="p-6 text-gray-500">
          Current window is ideal for errands and a short walk.
        </Text>
      </View>
    </View>
  );
}

export default HourlyAtmosphere