import { MaterialIcons, Feather, Ionicons } from "@expo/vector-icons";
import { View,Text,Image } from "react-native";

const weatherStats = [
  {
    label: "Air Quality",
    value: "32",
    description: "Good",
    bgColor: "#5EE9B5",
    icon: <MaterialIcons name="water" color="#fff" size={24} />,
    smoke: require("../assets/images/GreenSmoke.png"),
  },
  {
    label: "UV Index",
    value: "7",
    description: "High",
    bgColor: "#FFB86A",
    icon: <Feather name="sun" color="#fff" size={24} />,
    smoke: require("../assets/images/YellowSmoke.png"),
  },
  {
    label: "Wind",
    value: "14",
    description: "km/h NE",
    bgColor: "#8EC5FF",
    icon: <Feather name="wind" color="#fff" size={24} />,
    smoke: require("../assets/images/BlueSmoke.png"),
  },
  {
    label: "Humidity",
    value: "64%",
    description: "Balanced",
    bgColor: "#C4B4FF",
    icon: <Ionicons name="water-outline" color="#fff" size={24} />,
    smoke: require("../assets/images/lightPinkSmoke.png"),
  },
];

const WeatherStatsGrid = () => {
    return (
      <View className="mt-10 gap-2">
        {Array.from({ length: Math.ceil(weatherStats.length / 2) }).map(
          (_, rowIndex) => (
            <View key={rowIndex} className="flex-row gap-2">
              {weatherStats
                .slice(rowIndex * 2, rowIndex * 2 + 2)
                .map((stat, index) => (
                  <View
                    key={index}
                    className="w-1/2 p-4 bg-white rounded-3xl shadow-lg gap-3 relative overflow-hidden"
                  >
                    <Image
                      className="absolute right-0 top-0"
                      source={stat.smoke}
                    />
                    <View
                      style={{ backgroundColor: stat.bgColor }}
                      className="w-14 h-14 items-center justify-center rounded-full shadow-lg"
                    >
                      {stat.icon}
                    </View>
                    <View>
                      <Text className="text-sm text-[#6B7280]">
                        {stat.label}
                      </Text>
                      <Text className="text-3xl font-semibold">
                        {stat.value}
                      </Text>
                      <Text className="text-sm text-[#6B7280]">
                        {stat.description}
                      </Text>
                    </View>
                  </View>
                ))}
            </View>
          ),
        )}
      </View>
    );
};

export default WeatherStatsGrid;
