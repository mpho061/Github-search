import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import ResultsNotFound from "./ResultsNotFound";

const searchUser = ({navigation}) => {
  const API_URL = "https://api.github.com/search/users?q=";
  const [userName, setUserName] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [count, setCount] = useState();

  const search = () => {
    fetch(API_URL + userName)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProfiles(data.items);
        setCount(data.total_count);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally();
  };
  return (
    <View style={styles.container}>
      <Image source={{uri:"https://cdn.pixabay.com/photo/2016/04/12/22/35/watercolour-1325656_960_720.jpg"}}
      
      style={StyleSheet.absoluteFillObject}/>
      <View style={styles.SearchCard}
        blurRadius={90}
      >
        <TextInput
          style={styles.input}
          placeholder={"user name"}
          onChangeText={(e) => setUserName(e)}
        />
        <View style={{justifyContent:'center', alignItems:'center',}}>
          <TouchableOpacity style={styles.btn} onPress={() => search()}>
            <Text style={styles.btnText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        {profiles.length ? (
          <View>
            <View style={styles.SearchCard}>
              <Text style={{color:'black',fontSize:20, height:20, alignSelf:'center'}}>{count} Result Found</Text>
            </View>
           
            {profiles.map((user) => (
              <View  key={user.id} style={styles.cardView}>
                <Image style={{
                    width:70, height:70, borderRadius:50, marginRight: 10,
                }} source={{uri:user.avatar_url}}/>
                <View>
                  <Text style={{ fontSize: 13, fontWeight: "700" , color:'white'}}>
                    {user.login}
                  </Text>
                  <TouchableOpacity onPress={(()=>navigation.navigate('Repos'))}>
                    <Text style={{color:'white'}}>View Repo</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View>
            <ResultsNotFound />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  SearchCard: {
    flexDirection: "row",
    padding: 20,
    marginBottom: 10,
    margin: 10,
    borderRadius: 12,
    backgroundColor: "white",
  },
  text_design: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 60,
    borderColor: "black",
    borderWidth: 1,
    width: 270,
  },
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 60,
    backgroundColor: "blue",
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    color: "white",
  },
  cardView:{
    flexDirection:'row',
    padding:20,
    marginBottom:10,
    margin:10, 
    borderRadius:12,
    shadowColor:'#000',
    shadowOffset:{width:0, height:10,},
    backgroundColor:'rgb(255,255,255,9)',
    shadowOpacity:5,
    shadowRadius:20,
  },
});

export default searchUser;
