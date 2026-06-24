import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const CustomTabBar = ({ state }: BottomTabBarProps) => {
  const TABS = [
    { name: "index", icon: "home" },
    { name: "Search", icon: "search" },
    { name: "OutLook", icon: "umbrella" },
    { name: "Maps", icon: "map" },
  ] as const;
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        position: "absolute",
        bottom: insets.bottom + 12,
        left: 16,
        right: 16,
      }}
      className="flex-row p-4 justify-between items-center bg-white rounded-3xl shadow-xl"
    >
      {TABS.map((tab, index) => {
        const isFocused = state.index === index;
        return (
          <TouchableOpacity
            className={`py-4 px-6 rounded-full ${isFocused ? "bg-brand-primary" : ""}`}
            key={tab.name}
            onPress={() =>
              router.push(tab.name === "index" ? "/" : `/${tab.name}`)
            }
            activeOpacity={0.8}
          >
            <Feather
              name={tab.icon}
              size={20}
              color={isFocused ? "#fff" : "#81938A"}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
