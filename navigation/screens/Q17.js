import * as React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native'
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
            <ImageBackground style={styles.background} resizeMode="cover" source={require('../assets/passion.png')}>
                <View style={styles.title_container}>
                    <Text style={styles.title}>Passion</Text>
                </View>  
                <Text style={styles.minor}>Using my skills and abilities to make other people happy.</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
        backgroundColor: colors.main_background,
    },
    minor: {
        position: 'absolute',
        fontFamily: "SignikaNegative-Medium",
        fontSize: '40',
        color: "#FFF",
        alignSelf: 'center',
        bottom: 10,
        right: 10,
        textAlign: 'center',
        textShadowColor: '#000',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 10
    },
    title: {
        fontFamily: "SignikaNegative-Medium",
        fontSize: '40',
        textAlign: 'center',
        top: 10,
        textDecorationLine: 'underline'
    },
    title_container: {
        flex: .1,
        backgroundColor: '#FFF',
    }
})