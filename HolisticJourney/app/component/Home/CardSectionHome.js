import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const CardSection = (props) =>{

    return (
        <View style={styles.viewContainer}>
          {props.children}
        </View>
    );

}

export default CardSection;

const styles = {
    viewContainer:{
        borderBottomWidth: 0,
        backgroundColor: '#ffffff',
        padding: 5,
        marginTop: 15,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
        
    }
    
}
