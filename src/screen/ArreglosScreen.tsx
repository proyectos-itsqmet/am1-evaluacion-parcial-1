import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export const ArreglosScreen = () => {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [pares, setPares] = useState<number[]>([]);
  const [impares, setImpares] = useState<number[]>([]);

  const clasificarNumeros = () => {
    setPares(numeros.filter((n) => n % 2 === 0));
    setImpares(numeros.filter((n) => n % 2 !== 0));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BIENVENIDO</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.label}>Vector: </Text>
        <Text>{numeros.join(", ")}</Text>
      </View>
      <Button title="CLASIFICAR" onPress={clasificarNumeros} />
      <View style={styles.vectoresContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.label}>Pares: </Text>
          <Text>{pares.join(", ")}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.label}>Impares: </Text>
          <Text>{impares.join(", ")}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "lightblue",
  },
  vectoresContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  label: {
    fontWeight: "bold",
  },
});
