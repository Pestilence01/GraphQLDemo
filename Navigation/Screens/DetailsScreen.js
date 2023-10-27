import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function DetailsScreen(props) {
  const item = props.route.params.item;  // Fetches the data from previous stack
  console.log(item);
  return (
    <View style={styles.container}>
        <Text style={styles.item}>Title: {item.title}</Text>
        <Text style={styles.item}>Release date: {item.releaseDate}</Text>
        <Text style={styles.item}>Director: {item.director}</Text>
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
    padding: 'auto',
    marginHorizontal: 30,
    marginTop: 150
  },
  item: {
    marginHorizontal: 10,
    padding: 10,
    fontSize: 18,
    color: "#05a5a6",
    fontWeight: "bold",
    textAlign: "center",
  },
});
