import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Header from './common/Header';
import loginStyle from './styleFiles/login.style';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';

export default class Home extends Component {
   
    constructor(props){
        super(props);

        this.state = {
            // response:this.navigation.state.params.response,
            city: '',
            date: '',
            slots: '',
            error:'',
            response:[{'id':1}],
            isLoading: false,
            isLoggedIn: false,
        }
    }
    render(){
        return (
            <View style={loginStyle.Container}> 
                <Header />  
                <Card style={{backgroundColor: 'pink'}}>
            <CardSection>
                <Input 
                label={'City'}
                placeholder={''}
                value={this.state.city}
                onChangeText={text => this.setState({city:text})}
                />
          </CardSection>
        
        <CardSection>
            <Input 
            label={'Date'}
            placeholder={''}
            value={this.state.date}
            onChangeText={text => this.setState({date:text})}
            />
        </CardSection>
        <CardSection>
            <Input 
            label={'Slots'}
            placeholder={''}
            value={this.state.slots}
            onChangeText={text => this.setState({slots:text})}
            />
        </CardSection>

            {/* <Text style={styles.textErrorStyle}> {this.state.error}</Text> */}

                    <CardSection style={{flex: 1,flexDirection: 'row', justifyContent:'space-evenly'}} >
                            <Button btnDirection={'left'} whenPress={this.onClickBook.bind(this)}>
                            Book
                            </Button>
                           
                        </CardSection>
                </Card>
                </View>
        );

    }
    onClickBook(){
        console.log(' Book ');
        // Validate empty condition 
        // Call api 
        const  {email,password} = this.state;
        this.setState({isLoading:true,error:'' }) ;
        console.log(' Book ', this.state.response);
        this.props.navigation.navigate('HomeDetail',{response:this.state.response})
       
 }
}