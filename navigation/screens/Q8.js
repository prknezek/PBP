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
                <Text style={styles.title}>This I Believe</Text>
            </View>
            <View style={styles.info_rows}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Text style={styles.info}>I believe that hard work is better than innate talent.</Text>
                    </View>
                    <View style={styles.img_container}>
                        <Image style={styles.img} source={require('../assets/hard_work.jpg')}/>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={styles.img_container}>
                        <Image style={styles.img} source={require('../assets/talking.png')}/>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.info}>Treat other people the way you want to be treated.</Text>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Text style={styles.info}>I value moderation and try to stay level headed.</Text>
                    </View>
                    <View style={styles.img_container}>
                        <Image style={styles.img} source={require('../assets/moderation.jpg')}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.main_background,
    },
    info: {
        flex: 1,
        fontFamily: "SignikaNegative-Medium",
        fontSize: '22',
        padding: 10,
        backgroundColor: '#FFF',
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 30,
        marginBottom: 10
    },
    title: {
        fontFamily: "SignikaNegative-Medium",
        fontSize: '40',
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    title_container: {
        flex: .3,
        backgroundColor: '#FFF',
        justifyContent: 'center'
    },
    info_rows: {
        flex: 3,
        justifyContent: 'center',
    },
    img: {
        width: 180, 
        height: 180, 
        resizeMode: 'contain',
    },
    img_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})