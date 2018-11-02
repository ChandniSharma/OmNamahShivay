import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styles from '../styleFiles/header.style';

const Header = () => {

    return (
        <View style = {styles.viewStyle}>
            <Text style={styles.textStyle}>Holistic Journey</Text>
        </View>
    )

}

export default Header;

