import React, { Component } from "react";

import { StyleSheet, View, Text, Image } from "react-native";

export default class Icone extends Component {
  render() {
    const { escolha, jogador } = this.props;
    if (escolha == "Pedra") {
      return (
        <View style={styles.txtJogador}>
          <Text>{jogador}</Text>
          <Image source={require("../../images/pedra.png")} />
        </View>
      );
    } else if (escolha == "Tesoura") {
      return (
        <View style={styles.txtJogador}>
          <Text>{jogador}</Text>
          <Image source={require("../../images/tesoura.png")} />
        </View>
      );
    } else if (escolha == "Papel") {
      return (
        <View style={styles.txtJogador}>
          <Text>{jogador}</Text>
          <Image source={require("../../images/papel.png")} />
        </View>
      );
    } else {
      return false;
    }
  }
}

const styles = StyleSheet.create({
  txtJogador: {
    alignItems: "center",
    marginBottom: 20,
    fontSize: 18
  }
});
