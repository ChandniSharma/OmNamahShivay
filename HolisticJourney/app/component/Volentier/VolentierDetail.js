import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Linking} from 'react-native';
import Header from '../common/Header';
import loginStyle from '../../styleFiles/login.style';
import Button from '../common/Button';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Input from '../common/Input';
import * as constants from '../../Constants/Constants';

const VolentierDetail = ({record}) =>{

    const {title, artist, thumbnail_image,image, url } = record
const {headerContentStyle, thumbnailStyle, thumbnailContainerStyle,headerTextStyle, imageStyle} = styles 
 return (
     <Card >
         <CardSection>
             <View style={headerContentStyle}> 
                <Text style={headerTextStyle}>{title} </Text>
                <Text>{artist} </Text>
                <Text>Mobile Number</Text>
             </View>
         </CardSection>
     </Card>
 )

}

const styles={
 headerContentStyle:{
 flexDirection: 'column',
justifyContent: 'space-around'

 },
headerTextStyle:{
    fontSize: 18,
   
},

 thumbnailStyle:{
     width: 50,
     height: 50
 },
 thumbnailContainerStyle:{
     justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    },
    imageStyle:{
        height: 300,
        flex: 1,
        width: null
    }

}

export default VolentierDetail


