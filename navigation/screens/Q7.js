import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'
import { useFonts } from 'expo-font';

import colors from '../config/colors'

export default function TaskScreen({navigation}) {
    const [loaded] = useFonts({
        'SignikaNegative-Medium': require('../config/SignikaNegative-Medium.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return(
        <View style={styles.container}>
            <View style={styles.title_container}>
                <Text style={styles.title}>Skills & Abilities</Text>
            </View>
            <View style={styles.cols}>
                <View style={styles.checkbox}>
                    <Image style={styles.img} source={require('../assets/checkbox.png')}/>
                    <Image style={styles.img} source={require('../assets/checkbox.png')}/>
                    <Image style={styles.img} source={require('../assets/checkbox.png')}/>
                </View>
                <View style={styles.info_rows}>
                    <Text style={styles.info}>I excel at solving problems by breaking them down into manageable pieces.</Text>
                    <Text style={styles.info}>I am easy to talk too and have the ability to get along with most people.</Text>
                    <Text style={styles.info}>I am good at finding a fair solution by understanding both sides of a problem.</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cols: {
        flex: 1,
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        backgroundColor: colors.main_background,
    },
    img: {
        flex: 1,
        alignSelf: 'center',
        width: 60,
        height: 60,
        resizeMode: 'contain'
    },
    info: {
        flex: 1,
        fontFamily: "SignikaNegative-Medium",
        fontSize: '25',
        paddingTop: 65
    },
    title: {
        fontFamily: "SignikaNegative-Medium",
        fontSize: '40',
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    title_container: {
        flex: .1,
        backgroundColor: '#FFF',
        justifyContent: 'center'
    },
    checkbox: {
        flex: 1
    },
    info_rows: {
        flex: 3,
        justifyContent: 'center',
    }
})