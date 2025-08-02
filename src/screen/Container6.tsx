import React from "react";
import { View, StyleSheet } from "react-native";

export const Container6 = () => {
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
    flexDirection: "column",
    backgroundColor: "#28425B",
  },
  caja1: {
    backgroundColor: "#5855D6",
    flex: 1,
    borderColor: "white",
    borderWidth: 5,
  },
  caja2: {
    backgroundColor: "#F0A33B",
    flex: 1,
    borderColor: "white",
    borderWidth: 5,
  },
  caja3: {
    backgroundColor: "#28C4DA",
    flex: 2,
    borderColor: "white",
    borderWidth: 5,
  },
});
