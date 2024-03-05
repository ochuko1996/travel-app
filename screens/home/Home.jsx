import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import { ReuseableText, reuseable, HeightSpacer, Places, Recommendations, BestHotels } from '../../components'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import {AntDesign} from '@expo/vector-icons'
import styles from './home.style'
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={reuseable.container}>
      <View>
        <View style={reuseable.rowWithSpace('space-between')}>
          <ReuseableText
            text={'Hey User'}
            family={'medium'}
            size={TEXT.large}
            color={COLORS.black}
          />
          <TouchableOpacity style={styles.box} onPress={()=> navigation.navigate('Search')}>
            <AntDesign
              name={'search1'}
              size={26}

            />
          </TouchableOpacity>
        </View>
        <HeightSpacer height={SIZES.xLarge}/>
          <ReuseableText
            text={'Places'}
            family={'medium'}
            size={TEXT.large}
            color={COLORS.black}
          />
      </View>

      <Places/>

      <HeightSpacer height={15}/>

      <Recommendations/> 
      
      <HeightSpacer height={30}/>
      
      <BestHotels/>
    </SafeAreaView>
  )
}

export default Home
