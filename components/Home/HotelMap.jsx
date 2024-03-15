import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import MapView   from 'react-native-maps'

const HotelMap = ({coordinates, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {/* <MapView style={styles.maps} region={coordinates}>
        <Marker coordinate={coordinates} title={coordinates.title}  />
      </MapView> */}
    </TouchableOpacity>
  )
}

export default HotelMap

const styles = StyleSheet.create({
    maps: {
        marginHorizontal: 10,
        height: 120,
        width: '100%',
        borderRadius: 12,
    }
})