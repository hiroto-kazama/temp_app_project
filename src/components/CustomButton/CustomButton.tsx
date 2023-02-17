import React from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native'

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
    return(
        <Pressable 
            onPress={onPress} 
            style={[
                styles.container, 
                styles['container_${type}'],
                bgColor ? {backgroundColor: bgColor} : {},
            ]}>
            <Text 
                style={[
                    styles.text, 
                    styles['text_${type}'],
                    fgColor ? {color: fgColor} : {},
                ]}>
                {text}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(215,63,9)',

        width: '100%',

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: 'rgb(198,218,231)'
    },

    container_TERITIARY: {

    },

    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    text_TERITIARY:{
        color: 'gray'
    }
})

export default CustomButton