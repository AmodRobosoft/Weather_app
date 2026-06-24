import React from 'react'
import { Text, View } from 'react-native'
import HourlyAtmosphere from './HourlyAtmosphere'
import { Feather, Ionicons } from '@expo/vector-icons';


const Tripmode = () => {
  return (
    <View className="gap-4">
      <View className="gap-4">
        <View className="flex-row gap-4">
          <Feather name="calendar" color="#000" size={24} />
          <Text className="text-xl font-semibold">Trip Mode</Text>
        </View>
        <Text className="text-brand-text-secondary">
          Paris weekend is dry with jacket weather after sunset.
        </Text>
      </View>
      <HourlyAtmosphere />
      <View className="flex-row gap-4 p-4 bg-white shadow-lg rounded-3xl items-center border-[1px] border-gray-50">
        <View>
          <Ionicons name="partly-sunny-outline" color="#FFBF00" size={30} />
        </View>
        <View>
          <Text className="text-xl font-bold">Today</Text>
          <Text className="text-brand-text-secondary">Mostly bright</Text>
        </View>
      </View>
    </View>
  );
}

export default Tripmode