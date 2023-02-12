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
            <ImageBackground style={styles.background} resizeMode="cover" source={require('../assets/compsci.png')}>
                
                    <View style={styles.title_container}>
                        <Text style={styles.title}>Major Discipline</Text>
                    </View>      
                    <Text style={styles.computer_science}>I am a Computer Science Major</Text>
                    <Text style={styles.minor}>With a minor in Math</Text>
                
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
    computer_science: {
        position: 'absolute',
        fontFamily: "SignikaNegative-Medium",
        fontSize: '40',
        color: "#FFF",
        left: 10,
        top: 80
    },
    minor: {
        position: 'absolute',
        fontFamily: "SignikaNegative-Medium",
        fontSize: '40',
        color: "#FFF",
        bottom: 10,
        right: 10,
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