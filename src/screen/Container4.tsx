import React from "react";
import { View, StyleSheet } from "react-native";

export const Container4 = () => {
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
    backgroundColor: "#28425B",
    justifyContent: "space-between",
  },
  caja1: {
    backgroundColor: "#5855D6",
    height: 100,
    width: 100,
    borderColor: "white",
    borderWidth: 5,
  },
  caja2: {
    backgroundColor: "#F0A33B",
    height: 100,
    width: 100,
    borderColor: "white",
    borderWidth: 5,
    alignSelf: "center",
  },
  caja3: {
    backgroundColor: "#28C4DA",
    height: 100,
    width: 100,
    borderColor: "white",
    borderWidth: 5,
    alignSelf: "flex-end",
  },
});
