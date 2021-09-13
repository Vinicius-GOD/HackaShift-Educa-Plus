import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View
} from 'react-native';

import { Button } from '../components/Button';
import starLevel from '../assets/star_level.png'

import colors from '../../styles/colors';


import { useNavigation, useRoute } from '@react-navigation/core';



interface Params {
    title: string;
    subtitle: string;
    buttonTitle: string;
    icon: 'smile' | 'hug',
    nextScreen: string;
}

const emojis = {
    hug: '🤗',
    smile: '😀'
}

export function Confirmation() {
    const navigation = useNavigation();
    const routes = useRoute();

    const {
        title,
        subtitle,
        buttonTitle,
        icon,
        nextScreen
    } = routes.params as Params;

    function handleMovingOn() {
        navigation.navigate('Home')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    {emojis[icon]}
                </Text>

                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.subtitle}>
                    {subtitle}
                </Text>

                <View style={styles.footer}>
                    <Button
                        title={buttonTitle}
                        onPress={handleMovingOn}
                    />
                </View>
            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        width: '100%'
    },
    title: {
        fontSize: 22,

        textAlign: 'center',
        color: colors.text_dark,
        marginTop: 15,
        lineHeight: 38
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 17,
        paddingVertical: 10,
        color: colors.text_dark
    },
    emoji: {
        fontSize: 72
    },
    footer: {
        width: '100%',
        paddingHorizontal: 75,
        marginTop: 20
    }
});