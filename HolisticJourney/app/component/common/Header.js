import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import styles from '../../styleFiles/header.style';
import * as Animatable from 'react-native-animatable';


const Header = (props) => {
let textAttribute;
let image;

if (props.isAnimatable === 'No') {
    image = <Image source={require('../../assets/om.png')} style={styles.omIcon} />
  
    textAttribute = <Text style={styles.textStyle} animation="pulse" iterationCount={2} direction="alternate" delay={1000}>
             Holistic Journey
        </Text>
} else {
    image = <Image source={require('../../assets/om.png')} style={styles.omIcon} />

    textAttribute = <Animatable.Text style={styles.textStyle} animation="pulse" iterationCount={2} direction="alternate" delay={1000}>
             Holistic Journey
        </Animatable.Text>
}
    return (
        <View style = {styles.viewStyle}>
        {image}
        {textAttribute}
        </View>
    )

}

export default Header;

