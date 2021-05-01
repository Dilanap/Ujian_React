import React, { Component } from 'react'
import { StyleSheet, Image, View, } from "react-native";

export class like extends Component {

  constructor(props) {
    super(props)
    // this.state = {
    //     icon : require("./assets/disslike.png")
    // }
  }
  render() {
    return (
      <Image source={this.props.icon} style={styles.tinyLogo}></Image>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default like