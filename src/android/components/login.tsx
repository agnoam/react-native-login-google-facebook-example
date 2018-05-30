/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import FBSDK, { LoginButton, AccessToken } from 'react-native-fbsdk';

type Props = {};
export default class AndroidLoginPage extends Component<Props> {
  
  componentWillMount() {

  }

  printme(toPrint) {
    console.log(toPrint);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Image
          style={styles.logo}
          source={{uri: 'https://cdn.iconscout.com/public/images/icon/premium/png-512/frame-camera-capture-cinema-digicam-digital-equipment-film-photographer-video-media-multimedia-38556a04915b7cbf-512x512.png'}}
        />
        <GoogleSigninButton
          style={{width: 48, height: 48}}
          size={GoogleSigninButton.Size.Icon}
          
          color={GoogleSigninButton.Color.Dark}
          onPress={this.printme(this)}
        />
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={(error, result) => {
            if (error) {
              alert("login has error: " + result.error);
            } else if (result.isCancelled) {
              alert("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then((data) => {
                  alert(data.accessToken.toString())
              });
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  logo: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: 100
  },
  facebookBtn: {
    width: 50
  }
});
