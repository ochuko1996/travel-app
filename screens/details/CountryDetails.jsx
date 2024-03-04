import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
const CountryDetails = (payload) => {
    // const route = useRoute()
    // const {item} = route.params
    const {params: {item}}  = payload.route
    console.log(item);
  return (
    <View>
      <Text>CountryDetails</Text>
    </View>
  )
}

export default CountryDetails