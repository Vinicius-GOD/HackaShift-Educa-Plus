import React from 'react';

import { UserIdentification } from '../pages/UserIdentification';
import {
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    View
} from 'react-native';

import { Entypo, Feather } from '@expo/vector-icons';

import colors from '../../styles/colors';
import learningImg from '../assets/learning.png'
import logo from '../assets/logo.png'




import { useNavigation } from '@react-navigation/core';

export function Welcome() {

    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('UserIdentification');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Bem Vindo
                </Text>
                <Image
                    source={logo}
                    resizeMode="contain"
                />
                <Image
                    source={learningImg}
                    style={styles.image}
                    resizeMode="contain"
                />



                <Text style={styles.subtitle}>
                    Sua escola, no seu bolso.
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={handleStart}

                >
                    <Text style={styles.buttonIcon}>
                        Proseguir
                        <Feather name="chevron-right" style={styles.buttonIcon} />
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: colors.text_dark,
        lineHeight: 34,
        marginTop: 38,

    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.text_dark,

    },
    button: {
        backgroundColor: colors.button,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 200
    },
    image: {
        height: Dimensions.get('window').width * 1.2,
        width: '120%'

    },
    buttonIcon: {
        color: colors.white,
        fontSize: 32
    }
});