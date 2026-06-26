import {
  AntDesign,
  Entypo,
  Feather,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getGradientForWeather } from "@/utils/weatherUtils";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { toggleFavorite,clearRecentSearch,addRecentSearch } from "@/store/slices/searchSlice";

type SearchResult = {
  city: string;
  country: string;
  temperature: number;
  weather: string;
  gradientColors: string[];
};

const Search = () => {
  const insets = useSafeAreaInsets();
  const TAB_BAR_HEIGHT = 70;

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

    const dispatch = useAppDispatch();

    const { favCities, trendingCities, recentSearch } = useAppSelector(
      (state) => state.favorites,
    );

  const searchCity = useCallback(async (text: string) => {
    setQuery(text);
    setError("");

    if (text.trim().length < 2) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const geoRes = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(text)}&limit=5&appid=${process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY}`,
      );
      const geoData = await geoRes.json();

      if (!geoData.length) {
        setResults([]);
        setError("No cities found."); 
        return;
      }

      const weatherResults = await Promise.all(
        geoData.map(async (place: any) => {
          const weatherRes = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${place.lat}&lon=${place.lon}&units=metric&appid=${process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY}`,
          );
          const weatherData = await weatherRes.json();
          const condition = weatherData.weather[0].main;

          return {
            city: place.name,
            country: place.country,
            temperature: Math.round(weatherData.main.temp),
            weather: condition,
            gradientColors: getGradientForWeather(condition),
          } as SearchResult;
        }),
      );

      setResults(weatherResults);
      dispatch(addRecentSearch(text.trim()));
    } catch (e) {
      console.log(e)
      setError("Something went wrong. Check your API key or connection.");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleRecentPress = (cityName: string) => {
    setQuery(cityName);
    searchCity(cityName);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        paddingBottom: insets.bottom + 60 + TAB_BAR_HEIGHT,
      }}
      contentContainerClassName="px-4 gap-5"
    >
      <View className="gap-4 md:pt-10">
        <Text className="text-brand-text-secondary tracking-[3px] font-semibold uppercase">
          LOCATIONS
        </Text>
        <Text className="text-brand-text-primary font-bold text-3xl">
          Find weather
        </Text>
      </View>

      <View className="p-2 gap-2">
        {/* Search Input */}
        <View className="relative bg-white rounded-full shadow-xl border-[1px] border-gray-50">
          <Feather
            className="absolute top-5 left-6"
            name="search"
            color="#6B7280"
            size={20}
          />
          <TextInput
            className="pl-14 py-5 font-semibold  placeholder:text-brand-text-secondary"
            placeholder="City, country, or airport..."
            value={query}
            onChangeText={(text) => {
              setQuery(text);
              if (text.trim().length < 2) setResults([]);
            }}
            onSubmitEditing={() => searchCity(query)}
            returnKeyType="search"
            autoCorrect={false}
          />
          {loading && (
            <ActivityIndicator
              className="absolute top-5 right-6"
              color="#6B7280"
            />
          )}
        </View>

        {query.length >= 2 && (
          <View className="gap-3 pt-2">
            {error ? (
              <View className="h-full justify-center items-center ">
                <MaterialCommunityIcons
                  name="city-variant-outline"
                  color="#fff"
                  size={30}
                  className="bg-brand-primary rounded-full p-4 justify-center items-center"
                />

                <Text className="text-brand-primary px-2 font-bold text-xl">{error}</Text>
              </View>
            ) : (
              results.map((city) => (
                <TouchableOpacity
                  key={`${city.city}-${city.country}`}
                  className="bg-white shadow-xl rounded-[25px] overflow-hidden border-gray-100 border-[1px]"
                >
                  <LinearGradient
                    colors={city.gradientColors as any}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{ padding: 20 }}
                  >
                    <View className="flex-row justify-between items-center">
                      <View>
                        <Text className="text-xl font-semibold">
                          {city.city}
                        </Text>
                        <View className="flex-row items-center">
                          <Text>{city.country}</Text>
                          <Entypo name="dot-single" color="#000" />
                          <Text>{city.weather}</Text>
                        </View>
                      </View>
                      <Text className="text-3xl">
                        {city.temperature}
                        {`\u00B0`}
                      </Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              ))
            )}
          </View>
        )}

        {query.length < 2 && (
          <View className="gap-4">
            {/* Recent */}
            <View className="pt-4 flex-row justify-between">
              <Text className="text-brand-text-secondary">RECENT</Text>
              <TouchableOpacity onPress={() => dispatch(clearRecentSearch())}>
                <Text className="text-brand-text-secondary">Clear all</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              keyboardShouldPersistTaps="handled"
              contentContainerClassName="py-4 gap-4 px-2"
              showsHorizontalScrollIndicator={false}
            >
              {recentSearch.map((recent) => (
                <TouchableOpacity
                  onPress={() => handleRecentPress(recent)}
                  key={recent}
                  className="bg-white shadow-sm border-[1px] border-gray-100 rounded-full"
                >
                  <Text className="px-6 py-4 font-semibold">{recent}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Saved Cities */}
            <View className="py-4">
              <Text className="text-brand-text-secondary font-semibold uppercase pb-4">
                Saved cities
              </Text>
              <View className="gap-3">
                {favCities.map((city) => (
                  <View
                    key={city.city}
                    className="bg-white shadow-xl rounded-[25px] overflow-hidden border-gray-100 border-[1px]"
                  >
                    <LinearGradient
                      colors={city.gradientColors as any}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={{ padding: 20 }}
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
                            {city.tempature}
                            {`\u00B0`}
                          </Text>
                          <TouchableOpacity
                            className="bg-[#C41B4626] p-2 rounded-full"
                            onPress={() => dispatch(toggleFavorite(city.city))}
                          >
                            <AntDesign name="heart" color="#C41B46" size={20} />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </LinearGradient>
                  </View>
                ))}
              </View>
            </View>

            {/* Trending Cities */}
            <View className="py-4">
              <Text className="text-brand-text-secondary font-semibold uppercase pb-4">
                Trending cities
              </Text>
              <View className="gap-3">
                {trendingCities.map((city) => (
                  <View
                    key={city.city}
                    className="bg-white shadow-xl rounded-[25px] overflow-hidden border-gray-100 border-[1px]"
                  >
                    <LinearGradient
                      colors={city.gradientColors as any}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={{ padding: 20 }}
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
                            {city.tempature}
                            {`\u00B0`}
                          </Text>
                          <TouchableOpacity
                            onPress={() => dispatch(toggleFavorite(city.city))}
                            className="bg-[#C41B4626] p-2 rounded-full"
                          >
                            <SimpleLineIcons
                              name="heart"
                              color="#6B7280"
                              size={20}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </LinearGradient>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Search;
