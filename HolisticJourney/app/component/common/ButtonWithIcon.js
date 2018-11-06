import React, {Component} from 'react';
import {TouchableOpacity, View, Text,  Image, ImageBackground} from 'react-native';


const ButtonWithIcon = ({whenPress,iconName ,children}) =>{
const {buttonStyle, textStyle, container, imageDown } = styles;

  return(
      <View style={container} >
            <TouchableOpacity style={buttonStyle} onPress={whenPress}>
                        <Text style={textStyle}> 
                        {children}
                        </Text>
                        <Image source={require('../../assets/downArrow.png')} style={imageDown} />

                </TouchableOpacity>

      </View>
  );
}

const styles={
    container:{
       flex:1,
       flexDirection: 'row',
       backgroundColor:'transparent',
    },
    buttonStyle:{
       flex: 1,
        backgroundColor:'#ffffff',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 18,
        marginLeft: 10, 
        marginRight: 10,
        height:45,
        // marginTop: -40,
        
    //  alignSelf: 'stretch',
    },
    imageDown:{
        
       width: 20,
       height:20,
        top: -30,
       alignSelf: 'flex-end',
       marginRight:'2%'
    },
     
    textStyle:{
      
      fontSize: 18,
      borderColor: 'black',
      alignSelf: 'flex-start',
      backgroundColor: 'transparent',
      paddingTop: 10,
      paddingBottom: 10,
      marginLeft:10,
      color:'#656565'
    }
}
export default ButtonWithIcon;