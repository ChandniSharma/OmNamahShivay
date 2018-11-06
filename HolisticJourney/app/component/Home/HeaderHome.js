import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styles from '../../styleFiles/headerHomeStyle.style';
import * as Animatable from 'react-native-animatable';


const Header = (props) => {
let textAttribute;
if (props.isAnimatable === 'No') {
    textAttribute = <Text style={styles.textStyle} animation="pulse" iterationCount={2} direction="alternate" delay={1000}>
             Holistic Journey
        </Text>
} else {
    textAttribute = <Animatable.Text style={styles.textStyle} animation="pulse" iterationCount={2} direction="alternate" delay={1000}>
             Holistic Journey
        </Animatable.Text>
}
    return (
        <View style = {styles.viewStyle}>
        {textAttribute}
        </View>
    )

}



export default Header;

