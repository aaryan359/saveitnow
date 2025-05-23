import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import MainNavigation from './src/navigations/MainNavigation'


const App = () => {
  return (

     <View style={{ flex: 1 }}>
          <MainNavigation />
     </View>

  )
}

export default App


