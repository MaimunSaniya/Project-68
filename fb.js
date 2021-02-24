import React from 'react'; 
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';

export default class FacebookScreen extends React.Component{
    render(){
        return(
            <View>
                <Image
                    source={require("./img1.png")}
                    style={{width:1500,height:800,alignSelf:"center"}}
                />
            </View>
        )
    }
}