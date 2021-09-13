import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


import userImg from '../assets/viriliri.png';

import colors from '../../styles/colors';

import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header() {
    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        async function loadStorageName() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUserName(user || '');
        }

        loadStorageName();

    }, []);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Bem-Vindo</Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>

            <Image source={userImg} style={styles.image} />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        color: colors.background,

    },
    image: {
        width: 56,
        height: 56,
        borderRadius: 45
    },
    greeting: {
        fontSize: 32,
        color: colors.text_dark,

    },
    userName: {
        fontSize: 32,

        color: colors.text_dark,
        lineHeight: 40
    }
});