import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import  { HeightSpacer, NetworkImage, ReuseableText } from '../../../components'
import { COLORS, TEXT } from '../../../constants/theme'
import { useNavigation } from '@react-navigation/native'

const Country = ({item}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=> navigation.navigate('CountryDetails', {item})}>
      <View>
        <NetworkImage
          source={item.imageUrl}
          width={85}
          height={85}
          radius={12}
        />
        <HeightSpacer height={5}/>
        <ReuseableText
            text={item.country}
            family={'medium'}
            size={TEXT.large}
            color={COLORS.black}
            align={'center'}
        />
      </View>
    </TouchableOpacity>
  )
}

export default Country