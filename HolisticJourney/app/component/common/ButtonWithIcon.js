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
                        <Image source={require('../../assets/arrownext.png')} style={imageDown} />

                </TouchableOpacity>

      </View>
  );
}

const styles={
    container:{
       flex:1,
       flexDirection: 'row',
       
    },
    buttonStyle:{
       flex: 1,
        backgroundColor:'#ffffff',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 13,
        marginLeft: 30, 
        marginRight: 5,
        height:40
    //  alignSelf: 'stretch',
    },
    imageDown:{
        
       width: 40,
       height: 40,
       top: -40,
       alignSelf: 'flex-end',
    },
     
    textStyle:{
      
      fontSize: 18,
      borderColor: 'black',
      alignSelf: 'center',
      backgroundColor: '#ffffff',
      paddingTop: 10,
      paddingBottom: 10,
    }
}
export default ButtonWithIcon;