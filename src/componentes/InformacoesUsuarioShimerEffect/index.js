import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../InformacoesUsuario/styles";
import shimmerGif from "../../assets/shimmer.gif"

export function InformacoesUsuarioShimerEffect() {
  return (
    <View style={styles.container}>
      <Image source={shimmerGif} style={[styles.foto, { overlayColor: "#f2f2f2"}]} />
      <View style={styles.informacoes}>
      <Image source={shimmerGif} style={{ width: 100, height: 20}} />
      <Image source={shimmerGif} style={{ width: 140, height: 15, marginTop: 5}} />
      </View>
    </View> 
  );
}