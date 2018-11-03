import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styles from '../../styleFiles/header.style';
import * as Animatable from 'react-native-animatable';


const Header = () => {

    return (
        <View style = {styles.viewStyle}>
        <Animatable.Text style={styles.textStyle} animation="zoomIn" iterationCount={1} direction="alternate" delay={1000}>
             Holistic Journey
        </Animatable.Text>
        </View>
    )

}

export default Header;

