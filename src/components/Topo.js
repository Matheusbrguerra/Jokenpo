import React, { Component } from "react";

import { View, Image } from "react-native";

const Style = {
  view: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1
  }
};

export default class Topo extends Component {
  render() {
    return (
      <View style={Style.view}>
        <Image source={require("../../images/jokenpo.png")} />
      </View>
    );
  }
}
