import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image, StyleSheet} from 'react-native';

import colors from './config/colors'

// Screens
import Q3 from './screens/Q3';
import Q7 from './screens/Q7';
import Q8 from './screens/Q8';
import Q9 from './screens/Q9';
import Q14 from './screens/Q14';
import Q17 from './screens/Q17';

// Screen names
const Q3_name = "Major";
const Q7_name = "Skills";
const Q8_name = "TIBs";
const Q9_name = "Happiness";
const Q14_name = "Rants";
const Q17_name = "Passion";

const Tab = createBottomTabNavigator();

function LogoTitle() {
    return (
      <Image
        style={styles.logo}
        source={require('./assets/me.png')}
      />
    );
  }  

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={Q3_name}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;
                    // icons at the bottom, highlights buttons when pressed
                    if (rn === Q3_name) {
                        iconName = focused ? 'person' : 'person-outline'
                        color = colors.primary
                    } else if (rn === Q7_name) {
                        iconName = focused ? 'checkmark-circle' : 'checkmark-circle-outline'
                        color = '#32c746'
                    } else if (rn === Q8_name) {
                        iconName = focused ? 'list' : 'list-outline'
                        color = 'grey'
                    } else if (rn === Q9_name) {
                        iconName = focused ? 'flower' : 'flower-outline'
                        color = '#ff9500'
                    } else if (rn === Q14_name) {
                        iconName = focused ? 'thumbs-down' : 'thumbs-down-outline'
                        color = 'red'
                    } else if (rn === Q17_name) {
                        iconName = focused ? 'heart' : 'heart-outline'
                        color = 'pink'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                tabBarInactiveTintColor: 'grey',
                tabBarActiveTintColor: '#000'
            })}>

            <Tab.Screen name={Q3_name} component={Q3} options={{headerStyle: {backgroundColor: colors.primary}, headerTitle: (props) => <LogoTitle {...props}/>}}/>
            <Tab.Screen name={Q7_name} component={Q7} options={{headerStyle: {backgroundColor: colors.primary}, headerTitle: (props) => <LogoTitle {...props}/>}}/>
            <Tab.Screen name={Q8_name} component={Q8} options={{headerStyle: {backgroundColor: colors.primary}, headerTitle: (props) => <LogoTitle {...props}/>}}/>
            <Tab.Screen name={Q9_name} component={Q9} options={{headerStyle: {backgroundColor: colors.primary}, headerTitle: (props) => <LogoTitle {...props}/>}}/>
            <Tab.Screen name={Q14_name} component={Q14} options={{headerStyle: {backgroundColor: colors.primary}, headerTitle: (props) => <LogoTitle {...props}/>}}/>
            <Tab.Screen name={Q17_name} component={Q17} options={{headerStyle: {backgroundColor: colors.primary}, headerTitle: (props) => <LogoTitle {...props}/>}}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    logo: {
        alignContent: 'center',
        width: 90,
        height:60,
        marginBottom: 15,
        borderColor: '#000',
        borderWidth: 3,
    },
})