import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/osu_logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';


const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();
    //add functionality for log in button
    const onSignInPressed = () => {
        console.warn("Sign in")
    }
    return (
        <View style={styles.root}>
            <Image 
            source={Logo} 
            style = {[styles.logo, {height: height * 0.3}]} 
            resizeMode="contain"
            />

            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername}
                secureTextEntry={false}
            />
            <CustomInput 
            placeholder="Password" 
            value={password} 
            setValue={setPassword}
            secureTextEntry={true}
            />

            <CustomButton text = "Log In" onPress = {onSignInPressed}/>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20, 
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default SignInScreen