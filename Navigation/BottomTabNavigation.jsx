import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Chat, Home, Location, Profile } from '../screens'
import {Ionicons} from '@expo/vector-icons'
import { COLORS } from '../constants/theme'
const Tab = createBottomTabNavigator()


const tabBarStyle = {
    padding: 20,
    borderRadius: 20,
    position: 'absoulte',
    bottom: 20,
    // left: 20,
    // right: 20
}
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
        initialRouteName='Home'
        activeColor="#EB6A58"
        tabBarHideKeyBoard={true}
        headerShown={false}
        inactiveColor='#3e2465'
        barStyles={{paddingBottom: 48}}
    >
        <Tab.Screen 
        name='Home' 
        component={Home} 
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon:({focused})=>(
            <Ionicons 
              name={focused ? 'grid' : 'grid-outline'}
              color={focused ? COLORS.red : COLORS.gray}
              size={26}
            />
          )
        }}/>
        <Tab.Screen 
        name='Location' 
        component={Location} 
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon:({focused})=>(
            <Ionicons 
              name={focused ? 'location' : 'location-outline'}
              color={focused ? COLORS.red : COLORS.gray}
              size={26}
            />
          )
        }}/>
        <Tab.Screen 
        name='Chat' 
        component={Chat} 
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon:({focused})=>(
            <Ionicons 
              name={focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'}
              color={focused ? COLORS.red : COLORS.gray}
              size={26}
            />
          )
        }}/>
        <Tab.Screen 
        name='Profile' 
        component={Profile} 
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon:({focused})=>(
            <Ionicons 
              name={focused ? 'person' : 'person-outline'}
              color={focused ? COLORS.red : COLORS.gray}
              size={26}
            />
          )
        }}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigation