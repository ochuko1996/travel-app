import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import reuseable from './reuseable.style'
import { COLORS, SIZES } from '../../constants/theme'
import {AntDesign} from '@expo/vector-icons'
import ReuseableText from './ReuseableText'

const AppBar = ({color, title, color1, icon, onPress, onPress1, top, left, right}) => {
  return (
    <View style={styles.overlay(top, left, right)}>
      <View style={reuseable.rowWithSpace('space-between')}>
        <TouchableOpacity style={styles.box(color)} onPress={onPress}>
            <AntDesign
                name='left'
                size={26}
            />
        </TouchableOpacity>
        <ReuseableText
            text={title}
            family={'medium'}
            size={SIZES.medium}
            color={COLORS.black}
        />
        <TouchableOpacity style={styles.box1(color1)} onPress={onPress1}>
            <AntDesign
                name={icon}
                size={26}
            />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AppBar

const styles = StyleSheet.create({
    overlay: (top, left, right)=> ({
        position: 'absolute',
        top: top,
        left: left,
        right: right,
        justifyContent: 'center'
    }),
    box: (color)=>({
        backgroundColor: color,
        width: 30,
        height: 30,
        borderRadius: 9,
        alignItems: 'center'
    }),
    box1: (color1)=>({
        backgroundColor: color1,
        width: 30,
        height: 30,
        borderRadius: 9,
        alignItems: 'center'
    })
})