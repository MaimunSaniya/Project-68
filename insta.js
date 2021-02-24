import React from 'react'; 
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';

export default class InstagramScreen extends React.Component{
    render(){
        return(
            <View>
                <Image
                    source={require("./img2.png")}
                    style={{width:1500,height:800,alignSelf:"center"}}
                />
            </View>
        )
    }
}