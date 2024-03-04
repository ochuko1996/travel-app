import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './slides.styles'
import {HeightSpacer, ReuseableBtn, ReuseableText} from '../../components/index'
import { COLORS, SIZES } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'
const Slides = ({item}) => {
    const navigation = useNavigation()
  return (
    <View>
      <Image source={item.image} style={[styles.image, {resizeMode: 'cover'}]}/>
      <View style={styles.stack}>
        <ReuseableText
            text={item.title}
            family={'medium'}
            size={SIZES.xxLarge}
            color={COLORS.white}
        />
        <HeightSpacer height={40}/>
        <ReuseableBtn
            onPress={()=> navigation.navigate("Bottom")}
            btnTxt={"Let's go"}
            width={(SIZES.width - 50) / 2.2 }
            backgroundColor={COLORS.red}
            borderColor={COLORS.red}
            borderWidth={0}
            textColor={COLORS.white}
        />
      </View>
    </View>
  )
}

export default Slides

