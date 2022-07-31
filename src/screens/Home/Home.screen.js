import React from 'react'
import { SafeAreaView, View, Text, StatusBar, StyleSheet } from 'react-native'
import styles from './Home.style'
import ListChampion from '../../components/ListChampion'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Home = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <View >
            <ListChampion goNextScreen={navigation} />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}


export default Home
