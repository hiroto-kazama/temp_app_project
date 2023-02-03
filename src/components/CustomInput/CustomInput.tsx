import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue} 
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        //color
        backgroundColor: 'white',
        width: '100%',
        
        //border
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        
        //box spacing
        paddingHorizontal: 10,
        marginVertical: 5,

    },
    input: {},
})

export default CustomInput