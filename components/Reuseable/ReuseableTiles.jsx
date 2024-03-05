import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {HeightSpacer, NetworkImage, Rating, ReuseableText, WidthSpacer, reuseable} from '../../components'
import { COLORS, SIZES } from '../../constants/theme'

const ReuseableTiles = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={reuseable.rowWithSpace('flex-start')}>
        <NetworkImage
            source={item.imageUrl}
            width={80}
            height={80}
            radius={12}
        />
        <WidthSpacer width={15}/>
        <View>
          <ReuseableText
              text={item.title}
              family={'medium'}
              size={SIZES.medium}
              color={COLORS.black}
          />
          <HeightSpacer height={8}/>
          <ReuseableText
              text={item.location}
              family={'medium'}
              size={14}
              color={COLORS.gray}
          />
          <HeightSpacer height={8}/>
          <View style={reuseable.rowWithSpace('flex-start')}>
              <Rating rating={item.rating}/>
              <WidthSpacer  width={5}/>
              <ReuseableText
                  text={` ${item.review} `}
                  family={'medium'}
                  size={14}
                  color={COLORS.gray}
              />    
          </View>
        </View>


      </View>
    </TouchableOpacity>
  )
}

export default ReuseableTiles

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 12,
    }
})