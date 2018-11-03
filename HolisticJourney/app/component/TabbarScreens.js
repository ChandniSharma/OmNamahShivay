import React, { Component } from 'react';
import { TextInput, View, StyleSheet,Text } from 'react-native';
import Header from './common/Header';
import { createBottomTabNavigator } from 'react-navigation';


export default class TabarScreens extends Component {
    constructor() {
      super()
      this.state = {
        page: "Home",
      }
    }
    render() {
      return (
        <View style={styles.container}>
          {
            // if you are using react-navigation just pass the navigation object in your components like this:
            // {this.state.page === "HomeScreen" && <MyComp navigation={this.props.navigation}>Screen1</MyComp>}
          }
          {/* {this.state.page === "Home"}
          {this.state.page === "Profile"}
          {this.state.page === "Schedule"}
          {this.state.page === "Setting"}
   */}
          <Tabbar
            stateFunc={(tab) => {
              this.setState({page: tab.page})
              //this.props.navigation.setParams({tabTitle: tab.title})
            }}
            activePage={this.state.page}
            tabs={[
              {
                page: "Home",
                icon: "home",
              },
              {
                page: "Profile",
                icon: "person",
              },
              {
                page: "Schedule",
                icon: "notifications",
              },
              
              {
                page: "Setting",
                icon: "setting",
              },
            ]}
          />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });
  
