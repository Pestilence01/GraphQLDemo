import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>Name: Lovre Ninčević</Text>
      <Text style={styles.item}>Student at: FER</Text>
      <Text style={styles.item}>API Used: SWAPI GraphQL</Text>
      <Text style={styles.item}>Amount of fun I had: Lots!</Text>
      <Text style={styles.item}>Time taken: One long evening :)
      </Text>
      <Text style={styles.item}>Ready for more: Always!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#05a5a6",
    borderWidth: 3,
    borderRadius: 10,
    padding: "auto",
    marginHorizontal: 30,
    marginTop: 150,
  },
  item: {
    marginHorizontal: 10,
    padding: 10,
    fontSize: 14,
    color: "#05a5a6",
    fontWeight: "bold",
    textAlign: "center",
  },
});
