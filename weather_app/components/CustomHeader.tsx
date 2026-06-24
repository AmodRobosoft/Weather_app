import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react'
import { View,Text, Pressable } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomHeader = () => {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    return (
      <View
        style={{ marginTop: insets.top }}
        className="px-4 flex-row justify-between items-center mb-5"
      >
        <View className="bg-white py-4 px-4 rounded-3xl shadow-lg ">
          <Feather name="menu" size={24} />
        </View>
        <View className="bg-white shadow-lg p-4 rounded-3xl ">
          <View className="flex-row gap-2">
            <Feather name="send" size={15} />
            <Text className="font-bold">Brooklyn</Text>
          </View>
          <Pressable>
            <Text className="text-sm">Tap To Chnage</Text>
          </Pressable>
        </View>
        <View className="flex-row gap-2 ">
          <Pressable className="p-4 bg-white shadow-lg rounded-3xl">
            <Feather name="moon" color="#000" size={24} />
          </Pressable>
          <Pressable className="p-4 bg-white shadow-lg rounded-3xl">
            <Feather name="bell" color="#000" size={24} />
          </Pressable>
        </View>
      </View>
    );
}

export default CustomHeader