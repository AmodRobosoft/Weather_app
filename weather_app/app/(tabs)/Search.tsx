import { AntDesign, Entypo, EvilIcons, Feather, SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Search = () => {

  const RECENT_SERCH = ["New York", "Paris", "Tokyo"]
 const CITIES = [
   {
     fav_city: [
       {
         city: "Tokyo",
         contry: "Japan",
         gradientColors: ["#F4A8FF99", "#FFD6A899"],
         tempature: 31,
         weather: "Clear",
         isFav: true,
       },
       {
         city: "Reykjavík",
         contry: "Iceland",
         gradientColors: ["#FEE685CC", "#FFA1AD80"],
         tempature: 22,
         weather: "Sunny",
         isFav: true,
       },
     ],
     trending: [
       {
         city: "Reykjavík",
         contry: "Iceland",
         gradientColors: ["#A2F4FDB2", "#51A2FF80"],
         tempature: 22,
         weather: "Sunny",
         isFav: false,
       },
       {
         city: "New York",
         contry: "USA",
         gradientColors: ["#BEDBFF99", "#74D4FF80"],
         tempature: 27,
         weather: "Cloudy",
         isFav: false,
       },
       {
         city: "London",
         contry: "United Kingdom",
         gradientColors: ["#E5E7EBB2", "#CAD5E280"],
         tempature: 19,
         weather: "Rainy",
         isFav: false,
       },
       {
         city: "Paris",
         contry: "France",
         gradientColors: ["#FFCCD399", "#FFD6A880"],
         tempature: 24,
         weather: "Partly Cloudy",
         isFav: false,
       },
       {
         city: "Sydney",
         contry: "Australia",
         gradientColors: ["#B8E6FEB2", "#5EE9B580"],
         tempature: 29,
         weather: "Clear",
         isFav: false,
       },
     ],
   },
 ];

  const insets = useSafeAreaInsets();
   const TAB_BAR_HEIGHT = 70;
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: insets.bottom + 60 + TAB_BAR_HEIGHT,
      }}
      contentContainerClassName="px-4 gap-5"
    >
      <View>
        <Text className="tracking-[3px] text-brand-text-secondary">
          LOCATIONS
        </Text>
        <Text className="text-3xl font-bold">Find weather</Text>
      </View>
      <View className="p-2 gap-2">
        <View className="realtive bg-white rounded-full shadow-lg border-[1px] border-gray-50">
          <Feather
            className="absolute top-5 left-6"
            name="search"
            color="#6B7280"
            size={25}
          />
          <TextInput
            className="pl-14 py-5 text-xl font-semibold"
            placeholder="City, country, or airport..."
          />
        </View>
        <View className="gap-4">
          <View className="pt-4 flex-row justify-between">
            <Text className="text-brand-text-secondary">RECENT</Text>
            <Text className="text-brand-text-secondary">Clear all</Text>
          </View>
          <View className="flex-row gap-4">
            {RECENT_SERCH.map((recent) => (
              <View
                key={recent}
                className="bg-white shadow-lg border-[1px] border-gray-100 rounded-full"
              >
                <Text className="px-6 py-4">{recent}</Text>
              </View>
            ))}
          </View>
          <View className="py-4">
            <Text className="text-brand-text-secondary font-semibold  uppercase pb-4">
              Saved cities
            </Text>
            <View className="gap-3">
              {CITIES[0].fav_city.map((city) => (
                <View
                  key={city.city}
                  className="bg-white shadow-lg rounded-[25px] overflow-hidden border-gray-100 border-[1px] "
                >
                  <LinearGradient
                    colors={city.gradientColors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={[{ padding: 20 }]}
                  >
                    <View className="flex-row justify-between items-center">
                      <View>
                        <Text className="text-xl font-semibold">
                          {city.city}
                        </Text>
                        <View className="flex-row items-center">
                          <Text>{city.contry}</Text>
                          <Entypo name="dot-single" color="#000" />
                          <Text>{city.weather}</Text>
                        </View>
                      </View>
                      <View className="flex-row items-center gap-2">
                        <Text className="text-3xl">
                          {city.tempature} {`\u00B0`}
                        </Text>
                        <View className="bg-[#C41B4626] p-2 rounded-full">
                          {city.isFav ? (
                            <AntDesign name="heart" color="#C41B46" size={20} />
                          ) : (
                            <SimpleLineIcons
                              name="heart"
                              color="#6B7280"
                              size={20}
                            />
                          )}
                        </View>
                      </View>
                    </View>
                  </LinearGradient>
                </View>
              ))}
            </View>
          </View>
          <View className="py-4">
            <Text className="text-brand-text-secondary font-semibold  uppercase pb-4">
              Trending cities
            </Text>
            <View className="gap-3">
              {CITIES[0].trending.map((city) => (
                <View
                  key={city.city}
                  className="bg-white shadow-lg rounded-[25px] overflow-hidden border-gray-100 border-[1px] "
                >
                  <LinearGradient
                    colors={city.gradientColors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={[{ padding: 20 }]}
                  >
                    <View className="flex-row justify-between items-center">
                      <View>
                        <Text className="text-xl font-semibold">
                          {city.city}
                        </Text>
                        <View className="flex-row items-center">
                          <Text>{city.contry}</Text>
                          <Entypo name="dot-single" color="#000" />
                          <Text>{city.weather}</Text>
                        </View>
                      </View>
                      <View className="flex-row items-center gap-2">
                        <Text className="text-3xl">
                          {city.tempature} {`\u00B0`}
                        </Text>
                        <View className="bg-[#C41B4626] p-2 rounded-full">
                          {city.isFav ? (
                            <AntDesign name="heart" color="#C41B46" size={20} />
                          ) : (
                            <SimpleLineIcons
                              name="heart"
                              color="#6B7280"
                              size={20}
                            />
                          )}
                        </View>
                      </View>
                    </View>
                  </LinearGradient>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Search;