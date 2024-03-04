import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {ReuseableText, WidthSpacer, reusable} from '../../components'

const Rating = ({rating}) => {
  return (
    <View style={reusable.rowWithSpace('flex-start')}>
      <MaterialCommunityIcons
        name='star'
        size={20}
        color={'#fd9942'}
      />

      <WidthSpacer width={5}/>

      <ReuseableText
        text={rating}
        family={'medium'}
        size={15}
        color={"#fd9942"}
      /> 
    </View>
  )
}

export default Rating
