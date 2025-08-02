import React from "react";
import { View, StyleSheet } from "react-native";

export const Container9 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.caja1}></View>
      <View style={styles.caja2}></View>
      <View style={styles.caja3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#28425B",
    justifyContent: "center",
    alignItems: "center",
  },
  caja1: {
    backgroundColor: "#5855D6",
    borderColor: "white",
    borderWidth: 5,
    width: 100,
    height: 100,
  },
  caja2: {
    backgroundColor: "#F0A33B",
    borderColor: "white",
    borderWidth: 5,
    width: 100,
    height: 100,
    top: 50,
  },
  caja3: {
    backgroundColor: "#28C4DA",
    borderColor: "white",
    borderWidth: 5,
    width: 100,
    height: 100,
  },
});
