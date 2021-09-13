import React, { useEffect, useState } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View, Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    Alert, Image,
} from 'react-native';



import { useNavigation } from '@react-navigation/native';
import starLevel from '../assets/star_level.png'
import aluno from '../assets/aluno.png'
import example from '../assets/example.png'
import galery from '../assets/galery.png'
import post from '../assets/post.png'





import { Header } from '../components/Header';
import colors from '../../styles/colors';
import { FlatList } from 'react-native-gesture-handler';







export function Home() {

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    const navigation = useNavigation();

    function handInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }

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
                <View style={styles.postCreate}>
                    <View style={styles.insertPost}>
                        <Text style={styles.insertText}>
                            O que você gostaria de compartilhar hoje?
                        </Text>
                    </View>
                    <Text style={styles.galery}>
                        <Image source={galery} />
                        Galeria
                    </Text>
                    <Text style={styles.postButton}>
                        <Image source={post} />
                        Compartilhar
                    </Text>
                </View>
                <View style={styles.posts}>
                    <Image source={aluno} style={styles.aluno} />
                    <Text style={styles.postStatus}>
                        Joaozinho {'\n'}
                        12: 38
                    </Text>
                    <Text style={styles.postText}>
                        A atividade de matematica estava muito fácil
                    </Text>
                    <Image source={example} style={styles.example} />
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

    contracts: {
        marginTop: 30,
        paddingHorizontal: 25,
        justifyContent: 'center'
    },

    input: {
        borderBottomWidth: 2,
        borderColor: colors.placeholder,
        color: colors.text_dark,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'

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
    postCreate: {
        width: '90%',
        height: 100,
        backgroundColor: colors.background,
        marginLeft: '5.5%',
        borderRadius: 8,


    },
    galery: {

        width: 90,
        bottom: 38,
        margin: 25,
        height: 40,
        color: colors.black_text_button
    },
    postButton: {
        width: 120,
        bottom: 103,
        left: 238,
        height: 40,
        color: colors.black_text_button
    },
    insertPost: {
        width: '90%',
        height: 50,
        backgroundColor: colors.light_button,
        marginLeft: '5.5%',
        margin: 10,
        borderRadius: 8,
    },
    insertText: {
        margin: 5,
    },
    posts: {
        width: '90%',
        height: 295,
        backgroundColor: colors.background,
        marginLeft: '5.5%',
        marginTop: 15,
        borderRadius: 8,

    },
    aluno: {
        width: 45,
        height: 45,
        margin: 15,

    },
    postStatus: {
        left: 70,
        bottom: 60,
        lineHeight: 25,

    },
    postText: {
        margin: 15,
        bottom: 60,
    },
    example: {
        width: '100%',
        height: 180,
        bottom: 65,

    },

});