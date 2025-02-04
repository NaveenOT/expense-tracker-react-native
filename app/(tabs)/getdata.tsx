import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';


const getdata = () => {
  const [amount, getAmount] = React.useState('');
  return (
    <GestureHandlerRootView style={{flex: 1}}>
    <SafeAreaProvider>
    <ScrollView>
    <SafeAreaView>
      <Text style={styles.text}>Enter Transactions</Text>
      <Text>Enter Amount: </Text>
      <TextInput style={styles.input}
      value={amount}
      onChangeText={getAmount}
      placeholder='Enter Amount'
      keyboardType='numeric'
      />
    </SafeAreaView>
    </ScrollView>
    </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

export default getdata

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 25
  },
  input: {
    height: 40,
    borderColor: 'pink',
    borderRadius: 50,
    borderWidth: 1,
  }
})