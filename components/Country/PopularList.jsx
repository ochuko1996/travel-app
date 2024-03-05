import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import ReuseableTiles from '../Reuseable/ReuseableTiles'
import { useNavigation } from '@react-navigation/native'

const PopularList = ({data}) => {

    const navigation = useNavigation()

    const renderItem = ({item})=>(
        <View style={{marginBottom: 10}} >
            <ReuseableTiles 
                item={item} 
                onPress={()=> navigation.navigate('PlaceDetails', item._id)}
            />
        </View>
    )
  return (
    <FlatList
        data={data}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item)=> item._id}
        renderItem={renderItem}
    />
  )
}

export default PopularList

const styles = StyleSheet.create({})