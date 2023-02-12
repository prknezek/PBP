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
                <Text style={styles.title}>Happiness</Text>
            </View>
            <View style={styles.enjoy_container}>
                <Text style={styles.enjoy}>I enjoy...</Text>
            </View>
            <View style={styles.cols}>
                <View style={styles.checkbox}>
                    <ImageBackground source={require('../assets/friends.png')} style={styles.bkg}>
                        <Text style={styles.info}>Spending time with friends and family.</Text>
                    </ImageBackground>
                    <ImageBackground source={require('../assets/puzzle.png')} style={styles.bkg}>
                        <Text style={styles.info}>Solving problems and puzzles.</Text>
                    </ImageBackground>
                </View>
                <View style={styles.info_rows}>
                    <ImageBackground source={require('../assets/sculpture.png')} style={styles.bkg}>
                        <Text style={styles.info}>Creative, highly detailed, or intricate pieces of art.</Text>
                    </ImageBackground>
                    <ImageBackground source={require('../assets/game.png')} style={styles.bkg}>
                        <Text style={styles.info}>Watching TV and playing video games</Text>
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