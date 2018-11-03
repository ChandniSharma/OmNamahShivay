import React, {Component} from 'react';
import { TextInput, View, Text} from 'react-native';
import { TextField } from 'react-native-material-textfield';

const Input = ({label,value, onChangeText, placeholder, secureTextEntry}) =>{

    const {viewContainerStyle, labelStyle, textInputStyle } = styles;
    return(
          <TextField
                label={label}
                labelTextStyle={labelStyle}
                value={value}
                textColor='gray'
                containerStyle={viewContainerStyle}
                inputContainerStyle={textInputStyle}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                disabledLineWidth={0}
            /> 
        // <View style={viewContainerStyle}> 
        //     <Text style={labelStyle}>{label}</Text>
        //     <TextInput 
        //     secureTextEntry={secureTextEntry}
        //     autoCorrect={false}
        //     placeholder={placeholder}
        //     style={textInputStyle}
        //     value={value}
        //     onChangeText={onChangeText}
        //     />
        // </View>
    );
};
export default Input;

const styles = {

    viewContainerStyle:{
     flex: 1,
     flexDirection: 'row',
     borderColor: 'gray',
     borderWidth: 1,
     borderRadius: 23,
     height: 50,
     alignItems: 'flex-start',
     marginLeft: 10,
     marginRight: 10,
    },
    labelStyle:{
       paddingLeft: 20,
       color: 'black',
       fontSize: 18,
       
    },

    textInputStyle:{
        flex: 1,
        marginLeft: 15,
        marginRight:15,
        marginTop: -16,
        fontSize: 18, 
        lineHeight: 23
    }

}