import CustomHeader from '@/components/CustomHeader';
import CustomTabBar from '@/components/CustomTabBar';
import { Tabs } from 'expo-router';
import React from 'react'
import { View } from 'react-native'

const TabLyout = () => {
  return (
    <View className="flex-1">
      <CustomHeader />
      <Tabs
        screenOptions={{headerShown:false}}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="Search" options={{ title: "Search" }} />
        <Tabs.Screen name="OutLook" options={{ title: "OutLook" }} />
        <Tabs.Screen name="Maps" options={{ title: "Maps" }} />
      </Tabs>
    </View>
  );
}

export default TabLyout;