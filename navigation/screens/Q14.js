import * as React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native'
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
                <Text style={styles.title}>Rants</Text>
            </View>
            <View style={styles.enjoy_container}>
                <Text style={styles.enjoy}>I dislike...</Text>
            </View>
            <View style={styles.cols}>
                <View style={styles.checkbox}>
                    <ImageBackground source={require('../assets/red_onion.jpg')} style={styles.bkg}>
                        <Text style={styles.info}>Pickled red onions.</Text>
                    </ImageBackground>
                    <ImageBackground source={require('../assets/opinions.jpg')} style={styles.bkg}>
                        <Text style={styles.info}>Overly opiniated people.</Text>
                    </ImageBackground>
                </View>
                <View style={styles.info_rows}>
                    <ImageBackground source={require('../assets/judgy.jpg')} style={styles.bkg}>
                        <Text style={styles.info}>Judgy people</Text>
                    </ImageBackground>
                    <ImageBackground source={require('../assets/egoistic.png')} style={styles.bkg}>
                        <Text style={styles.info}>Egocentric people</Text>
                    </ImageBackground>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bkg: {
        flex: 1,
    },
    cols: {
        flex: 1,
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        backgroundColor: colors.main_background,
    },
    enjoy: {
        fontFamily: "SignikaNegative-Medium",
        fontSize: '40'
    },
    enjoy_container: {
        flex: .1,
        paddingTop: 10,
        paddingLeft: 10
    },
    img: {
        flex: 1,
        alignSelf: 'center',
        width: 60,
        height: 60,
        resizeMode: 'contain'
    },
    info: {
        fontFamily: "SignikaNegative-Medium",
        fontSize: '25',
        paddingTop: 65,
        color: '#FFF',
        textAlign: 'center',
        textShadowColor: '#000',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 10
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
        flex: 1,
        justifyContent: 'center',
    }
})