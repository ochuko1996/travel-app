import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants/theme'

const ReuseableBtn = ({onPress, btnTxt, textColor,width, backgroundColor, borderWidth, borderColor}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnStyle(width, backgroundColor, borderWidth, borderColor)}>
      <Text style={styles.btnText(textColor)}>
        {btnTxt}
      </Text>
    </TouchableOpacity>
  )
}

export default ReuseableBtn

const styles = StyleSheet.create({
    btnText: (textColor)=>({
        fontFamily: 'medium',
        fontSize: SIZES.medium,
        color: textColor,
    }),
    btnStyle: (width, backgroundColor, borderWidth, borderColor)=>({
        width: width,
        backgroundColor: backgroundColor,
        borderWidth: borderWidth,
        borderColor: borderColor,
        height: 45,
        borderRadius: SIZES.small,
        alignItems: 'center',
        justifyContent: 'center'
    })
})