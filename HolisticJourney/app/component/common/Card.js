import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Card = (props) =>{

    return (
        <View style={styles.containerStyle}> 
          {props.children}
        </View>
    )

   
}

export default Card;

const styles = {
    containerStyle:{
        // borderColor: '',
       // borderTopColor: 'green',
        // borderTopWidth: 1,
       // borderBottomColor: 'black',
        // borderBottomWidth: 1,
        // borderRadius: 2,
        // shadowColor: '',
        // shadowOffset: {width:1, height:2},
        // shadowOpacity: 0.5,
        
       marginLeft: 5,
       marginRight: 5,
       marginTop: '10%',
       marginBottom: 10,
       alignItems: 'center',
       
        flex: 1,
        flexDirection: 'column',
       
    }
}
