import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const ResultsNotFound = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/seaechA.jpg")} />
      <Text style={{fontWeight:'700', color:'white'}} >Result not found</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    width:Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  img: {
    height: "40%",
    width: "90%",

  },
});
export default ResultsNotFound;
