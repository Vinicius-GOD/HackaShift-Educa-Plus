import React, { useEffect, useState } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';



import { useNavigation } from '@react-navigation/native';

import starLevel from '../assets/star_level.png'

import storeItem from '../assets/storeItem.png'

import { Header } from '../components/Header';
import colors from '../../styles/colors';







export function Store() {

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Header />

                    <View style={styles.subheader}>
                        <Text style={styles.exp}>
                            0/100
                        </Text>
                        <Image source={starLevel} style={styles.image} />
                    </View>
                </View>

                <View style={styles.store}>
                    <Image source={storeItem} style={styles.storeImg} />
                    <Image source={storeItem} style={styles.storeImg} />
                    <Image source={storeItem} style={styles.storeImg} />
                    <Image source={storeItem} style={styles.storeImg} />
                </View>

            </View>



        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,

    },
    content: {
        width: '100%',
        height: 200,
        backgroundColor: colors.background

    },
    header: {
        paddingLeft: 30,
        paddingRight: 30
    },
    title: {
        fontSize: 17,
        textAlign: 'center',

        lineHeight: 20,
        marginTop: 15
    },
    subTitle: {
        fontSize: 17,
        lineHeight: 20,

    },

    contracts: {
        marginTop: 30,
        paddingHorizontal: 25,
        justifyContent: 'center'
    },
    button: {

        borderRadius: 8,
        marginBottom: 40,
        height: 80,
        width: 360

    },
    buttonText: {
        fontSize: 16,

        fontWeight: 'bold',
        marginLeft: 69,

    },
    buttonSubtitle: {
        fontSize: 14,

        marginLeft: 69,

    },
    image: {
        width: 60,
        height: 60,
        left: 300,
        bottom: 45,
    },
    subheader: {
        width: '100%',
    },

    exp: {
        height: 25,
        width: 250,
        fontSize: 17,
        lineHeight: 20,
        backgroundColor: colors.light_button,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 8,
    },
    store: {
        width: '90%',
        marginLeft: '9%',

    },
    storeImg: {

        marginTop: 10,
    },

});