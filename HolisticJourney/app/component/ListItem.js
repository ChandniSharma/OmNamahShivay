import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = (props) => {
    return (
         <View style = { styles.listItem }>
            <Text style={styles.textStyle}>{ props.placeName }</Text>
            <TouchableOpacity onPress={ props.onItemPressed }>
               <Image source={require('../assets/DeleteIcon.png')} style={styles.imageStyle } />
            </TouchableOpacity>
         </View>
        
    );
}

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageStyle:{
        width:32,
        height:32
    },
    textStyle:{
       fontSize: 14,
       justifyContent: 'center',
       alignItems:'flex-start',
    }
});

export default ListItem;