 import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppBar from '../../components/Reuseable/AppBar'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import styles from './HotelDetails.style'
import {DescriptionText, HeightSpacer, HotelMap, NetworkImage, ReuseableText, reuseable} from '../../components/index'
import {Rating} from 'react-native-stock-star-rating'
import {Feather} from '@expo/vector-icons'

const HotelDetails = ({navigation}) => {
  const hotel = {
    "availability": {
        "start": "2023-08-20T00:00:00.000Z",
        "end": "2023-08-25T00:00:00.000Z"
    },
    "_id": "64c675793cfa5e847bcd5436",
    "country_id": "64c62bfc65af9f8c969a8d04",
    "title": "Urban Chic Boutique Hotel",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
    "contact": "64c5d95adc7efae2a45ec376",
    "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
    "rating": 4.8,
    "review": "2312 Reviews",
    "location": "San Francisco, CA",
    "latitude": 37.7749,
    "longitude": -122.4194,
    "price": 400,
    "facilities": [
        {
            "wifi": true,
            "_id": "64c675793cfa5e847bcd5437"
        }
    ],
    "__v": 0
  }
  let coordinates = {
    id: hotel._id,
    title: hotel.title,
    latitude: hotel.latitude,
    longitude: hotel.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }
  return (
    <ScrollView>
      <View style={{height: 80}}>
        <AppBar 
          title={hotel.title} 
          color={COLORS.white} 
          color1={COLORS.white} 
          icon={'search1'}
          onPress={()=> navigation.goBack()}
          onPress1={()=> {}}
          top={50}
          left={20}
          right={20}
        />
      </View>
      
      <View>
        <View style={styles.container}>
          <NetworkImage 
            source={hotel.imageUrl}
            width={'100%'}
            height={220}
            radius={25 }
          />
          <View style={styles.titleContaner}>
            <View style={styles.titleColumn}>
              <ReuseableText
                text={hotel.title}
                family={'medium'}
                size={TEXT.xLarge}
                color={COLORS.black}
              />
              
              <HeightSpacer height={10} />
              
              <ReuseableText
                text={hotel.location}
                family={'medium'}
                size={SIZES.medium}
                color={COLORS.black}
              />
              
              <HeightSpacer height={5}/>

              <View style={reuseable.rowWithSpace('space-between')}>
                <Rating
                  markStars={5}
                  stars={hotel.rating}
                  bordered={false}
                  color={'#FD9942'}
                />
                <ReuseableText
                  text={`${hotel.review}`}
                  family={'medium'}
                  size={SIZES.medium}
                  color={COLORS.gray}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.container, {paddingTop: 90}]}>
          <ReuseableText
            text={'Description'}
            family={'medium'}
            size={SIZES.large}
            color={COLORS.black}
          />

          <HeightSpacer height={10} />

          <DescriptionText text={hotel.description}/>

          <ReuseableText
            text={'Location'}
            family={'medium'}
            size={SIZES.large}
            color={COLORS.black}
          />

          <HeightSpacer height={15} />

          <ReuseableText
            text={hotel.location}
            family={'medium'}
            size={SIZES.small+2}
            color={COLORS.gray}
          />

          {/* <HotelMap coordinates={coordinates}/> */}

          <View style={reuseable.rowWithSpace('space-between')}>
            <ReuseableText
              text={'Reviews'}
              family={'medium'}
              size={SIZES.small+2}
              color={COLORS.gray}
            />

            <TouchableOpacity>
              <Feather name='list' size={20 }/>
            </TouchableOpacity>
          </View>


        </View>
      </View>
    </ScrollView>
  )
}

export default HotelDetails

