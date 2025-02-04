import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from './components/CustomButton'; // Ensure this file exists
import { Redirect, router } from 'expo-router';
const Index = () => {
  return (
    <SafeAreaView style={styles.container}> 
      <Text style={styles.textstyle}>Welcome to my App</Text>
      <CustomButton onPress={()=> router.push('/(tabs)/getdata')}/>
    </SafeAreaView>
    //<Link href="/profile" style={styles.textstyle}> Go To Profile </Link>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textstyle: {
    color: 'white',
    fontSize: 30,
    fontStyle: 'italic',
  }
});
