/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity
} from "react-native";

const FBSDK = require("react-native-fbsdk");
const { LoginButton, AccessToken, LoginManager } = FBSDK;

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text> */}
        {/* <LoginButton
          publishPermissions={["public_profile"]}
          onLoginFinished={(error, result) => {
            if (error) {
              Alert.alert(
                "Alert Title",
                result.error,
                [
                  {
                    text: "Ask me later"
                  },
                  {
                    text: "Cancel",
                    style: "cancel"
                  }
                ],
                { cancelable: false }
              );
            } else if (result.isCancelled) {
              Alert.alert(
                "Alert Title",
                "login is cancelled.",
                [
                  {
                    text: "Ask me later"
                  },
                  {
                    text: "Cancel",
                    style: "cancel"
                  }
                ],
                { cancelable: false }
              );
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                Alert.alert(
                  "Alert Title",
                  data.accessToken.toString(),
                  [
                    {
                      text: "Ask me later"
                    },
                    {
                      text: "Cancel",
                      style: "cancel"
                    }
                  ],
                  { cancelable: false }
                );
              });
            }
          }}
          onLogoutFinished={() => alert("logout.")}
        /> */}
        <TouchableOpacity
          onPress={() => {
            console.log("Login start");
            LoginManager.logInWithReadPermissions([
              "public_profile",
              "email"
            ]).then(
              function(result) {
                if (result.isCancelled) {
                  //alert("Login cancelled");
                  console.log("Login cancelled");
                } else {
                  console.log(result);
                  console.log(result.grantedPermissions.toString());
                  // alert(
                  //   "Login success with permissions: " +
                  //     result.grantedPermissions.toString()
                  // );
                }
              },
              function(error) {
                console.log("Login fail with error: " + error);
                //alert("Login fail with error: " + error);
              }
            );
          }}
        >
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
