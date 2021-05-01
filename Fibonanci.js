import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import Like from './component/Like'
import DissLike from './component/DissLike'

class Fibonanci extends Component {

  constructor(props) {
    super(props)
    this.state = {
      iconSetLike: require("./component/assets/like.png"),
      iconSetDissLike: require("./component/assets/disslike.png")
    }
  }

  test = []
  panjang = 10
  lebar = 10
  count = 0
  x = 0
  y = 0

  changeIcon = () => {
    this.setState({ iconSetLike: require("./component/assets/disslike.png") })
  }

  render() {
    const panjang = 10
    const lebar = 10
    let count = 0
    let x = 0
    let y = 0
    this.test = []
    for (x = 1; x <= panjang; x++) {
      for (y = 1; y <= lebar; y++) {
        count++;
        let countTemp = 0;
        for (let z = 1; z <= count; z++) {
          if (count % z == 0) {
            countTemp++;
          }
        }
        if (countTemp == 2) {
          this.test.push(<TouchableOpacity onPress={
            () => {
              this.setState({ iconSetLike: require("./component/assets/disslike.png") })
            }
          }>
            <DissLike icon={this.state.iconSetLike} />
          </TouchableOpacity>);
        } else {
          this.test.push(<TouchableOpacity onPress={
            () => {
              this.setState({ iconSetLike: require("./component/assets/like.png") })
            }
          }>
            <Like />
          </TouchableOpacity>);
        }
      }
    }
    return (
      <View>
        <ScrollView>
          <Text>{this.test}</Text>
        </ScrollView>
      </View>
    );
  }
}

export default Fibonanci;