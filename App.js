import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts} from 'expo-font'
import * as Splashscreen from 'expo-splash-screen'
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CountryDetails, Onboarding, Recommended, Search } from './screens';
import BottomTabNavigation from './Navigation/BottomTabNavigation';
const Stack = createStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/regular.otf'),
    medium: require('./assets/fonts/medium.otf'),
    bold: require('./assets/fonts/bold.otf'),
    light: require('./assets/fonts/light.otf'),
    xtrabold: require('./assets/fonts/xtrabold.otf'),
  })
  const onLayoutRootView = useCallback(async ()=>{
    if(fontsLoaded){
      await Splashscreen.hideAsync()
    }
  }, [fontsLoaded])
  if (!fontsLoaded) {
    return null
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Onboard' component={Onboarding} options={{headerShown: false}}/>
        <Stack.Screen name='Bottom' component={BottomTabNavigation} options={{headerShown: false}}/>
        <Stack.Screen name='Search' component={Search} options={{headerShown: false}}/>
        <Stack.Screen name='CountryDetails' component={CountryDetails} options={{headerShown: false}}/>
        <Stack.Screen name='Recommended' component={Recommended} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


