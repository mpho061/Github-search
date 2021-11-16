import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ResultsNotFound from "./ResultsNotFound";
import { Feather } from '@expo/vector-icons';
const Repos = ({ navigation, route }) => {
  const { repoURL } = route.params;

  console.log(repoURL);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(repoURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRepos(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally();
  }, []);

  return (
    <View>
      {repos.length ? (
        <View style={styles.cardView}>
          {repos.map((repo) => (
            <View key={repo.id}>
              <Text style={{ color: "black", fontWeight: "bold", alignText:'center', }}>
                {" "}
                Repo Name  <Feather name="codesandbox" size={24} color="black" />         : {repo.name}
              </Text>
              <View style={styles.cardView2}>
                 
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Default Branch : {repo.default_branch}
                </Text>
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Repo Description: {repo.description}
                </Text>
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Created at: {repo.created_at}
                </Text>
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Language: {repo.language}
                </Text>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <ResultsNotFound />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cardView: {
    flexDirection: "column",
    padding: 20,
    marginBottom: 10,
    marginRight:10,
    margin: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    backgroundColor: "rgb(215,191,255,9)",
    shadowOpacity: 5,
    shadowRadius: 20,
    height: "100%",
  },
  cardView2: {
    flexDirection: "column",
    padding: 20,
    marginBottom: 10,
    margin: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    backgroundColor: "rgb(255,255,255,9)",
    shadowOpacity: 5,
    shadowRadius: 20,
    width: "100%",
  },
  viewText: {
    color: "white",
    fontWeight: "bold",
  },
});
export default Repos;
