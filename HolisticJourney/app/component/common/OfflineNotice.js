import React, { PureComponent } from 'react';
import { View, Text, NetInfo, Dimensions, StyleSheet } from 'react-native';


const { width } = Dimensions.get('window');

function MiniOfflineSign() {
    return (
      <View style={styles.offlineContainer}>
        <Text style={styles.offlineText}>No Internet Connection</Text>
      </View>
    );
  }

  class OfflineNotice extends PureComponent {
    state = {
      isInternetConnected: true
    };
  
    componentDidMount() {
      NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    }
  
    componentWillUnmount() {
      NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    }
  
    handleConnectivityChange = isInternetConnected => {
      if (isInternetConnected) {
        this.setState({ isInternetConnected });
      } else {
        this.setState({ isInternetConnected });
      }
    };

    render() {
        if (!this.state.isInternetConnected) {
          return <MiniOfflineSign />;
        }
        return null;
      }
    }

    const styles = StyleSheet.create({
        offlineContainer: {

          backgroundColor: '#b52424',
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          width,
          position: 'absolute',
          top: 10
        },
        offlineText: { color: '#fff' }
      });
      
      export default OfflineNotice;