import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_MOVIES } from "../GraphQL/Queries";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function MoviesList({ stackNavigation }) {
  const handlePress = (item) => {
    stackNavigation.navigate("Details", { item: item });  //Navigates to the Movie details stack
  };

  const { data } = useQuery(LOAD_MOVIES);
  const [movies, setMovies] = useState([]);  // The state hook for handling changes in the movies array


  useEffect(() => {  // this useEffect hook ensures the data is rendered when fully loaded from the API
    if (data) {
      setMovies(data.allFilms.films);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <FlatList //Instead of flat list, we can also use the .map function over the movies array and wrap it with a Scroll View
        data={movies}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}> 
            <Text style={styles.item}>{item.title}</Text>
          </TouchableOpacity>  //This creates a lovely ripple effect when an item is clicked
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 40,
    padding: 10,
    borderColor: "#05a5a6",
    borderWidth: 3,
    borderRadius: 10,
    fontSize: 18,
    color: "#05a5a6",
    fontWeight: "bold",
    textAlign: "center",
  },
});
