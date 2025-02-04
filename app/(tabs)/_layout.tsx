import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen 
        name="getdata"
        options={{
          title: 'Get Data',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('../../assets/images/logo.png')} 
              style={{ width: 24, height: 24, tintColor: focused ? 'pink' : 'blue' }} 
            />
          ),
        }} 
      />
      <Tabs.Screen 
        name="showdata"
        options={{
          title: 'Show Data',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('../../assets/images/logo.png')} 
              style={{ width: 24, height: 24, tintColor: focused ? 'pink' : 'grey' }} 
            />
          ),
        }} 
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
