import React, {Component} from 'react';
import {TouchableOpacity, View, Text, ScrollView} from 'react-native';

export default class Volentier extends Component {
    constructor(props){
        super(props);
        this.state={
            albumData:[]
           }
    }
       componentWillMount(){
           console.log('Album List ');
           // Api Define
            axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response=>this.setState({albumData:response.data}));
       }
   
       renderAlbums(){
           return this.state.albumData.map(album =>
               
           <renderItems key={album.title} record={album} /> )
       }
   
       render(){
           return(
               <View style={styles.viewStyle}>
                  <Header titleText={'Album List'} />
                  <ScrollView>
                  {this.renderItems()}
                  </ScrollView>
               </View>
           );
       }
}