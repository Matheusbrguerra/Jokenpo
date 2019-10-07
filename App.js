import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

import Topo from "./src/components/Topo";
import Icone from "./src/components/Icone";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      escolhaComputador: "",
      escolhaUsuario: "",
      resultado: ""
    };
  }

  jokenpo(escolhaUsuario) {
    this.setState({ escolhaUsuario: escolhaUsuario });

    const arr = ["Pedra", "Papel", "Tesoura"];

    var numeroAleatorio = Math.floor(Math.random() * 3);

    var escolhaComputador = arr[numeroAleatorio];

    this.setState({ escolhaComputador: escolhaComputador });

    if (escolhaComputador == escolhaUsuario) {
      resultado = "Empate";
    } else if (escolhaComputador == "Pedra" && escolhaUsuario == "Tesoura") {
      resultado = "Você perdeu";
    } else if (escolhaComputador == "Tesoura" && escolhaUsuario == "Papel") {
      resultado = "Você perdeu";
    } else if (escolhaComputador == "Papel" && escolhaUsuario == "Pedra") {
      resultado = "Você perdeu";
    } else if (escolhaUsuario == "Pedra" && escolhaComputador == "Tesoura") {
      resultado = "Você venceu";
    } else if (escolhaUsuario == "Tesoura" && escolhaComputador == "Papel") {
      resultado = "Você venceu";
    } else if (escolhaUsuario == "Papel" && escolhaComputador == "Pedra") {
      resultado = "Você venceu";
    }
    this.setState({ resultado: resultado });
  }

  render() {
    const { escolhaUsuario, escolhaComputador, resultado } = this.state;
    return (
      <View>
        <Topo />

        <View style={styles.painel}>
          <View style={styles.btnEscolha}>
            <Button
              title="Pedra"
              onPress={() => {
                this.jokenpo("Pedra");
              }}
            />
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="Papel"
              styles={styles.btnEscolha}
              onPress={() => {
                this.jokenpo("Papel");
              }}
            />
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="Tesoura"
              styles={styles.btnEscolha}
              onPress={() => {
                this.jokenpo("Tesoura");
              }}
            />
          </View>
        </View>
        <View style={styles.palco}>
          <Text style={styles.txtResultado}>Resultado: {resultado}</Text>

          <Icone escolha={escolhaComputador} jogador="Computador" />
          <Icone escolha={escolhaUsuario} jogador="Você" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painel: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  palco: {
    alignItems: "center",
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red"
  }
});
