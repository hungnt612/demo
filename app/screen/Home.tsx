import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DrawHorizontalRuler from "../compoments/DrawHorizontalRule";


const Home: React.FC<{navigation}> =({navigation}) => {
  return(
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <View style={styles.iconLocation}>

        </View>
        <View style={styles.searchBar}>
        </View>
      </View>
      <View style={styles.topCategories}>

      </View>
      <DrawHorizontalRuler></DrawHorizontalRuler>
      <View style={styles.popularItems}>

      </View>
      <DrawHorizontalRuler></DrawHorizontalRuler>
      <View style={styles.saleOff}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
  },
  searchBarContainer:{
    flexDirection:"row",
    marginHorizontal:20,
  },
  iconLocation:{
    height:40,
    width:40,
    backgroundColor:'red',
  },
  searchBar:{
    backgroundColor:'blue',
    width:'85%',
    height:40,
    marginLeft:10,
  },
  topCategories:{
    backgroundColor:'red',
    height:100,
    width:'90%',
    marginHorizontal:20,
    marginVertical:20,
  },
  popularItems:{
    backgroundColor:'red',
    height:200,
    width:'90%',
    marginHorizontal:20,
    marginVertical:20,
  },
  saleOff:{
    backgroundColor:'red',
    height:200,
    width:'90%',
    marginHorizontal:20,
    marginVertical:20,
  },
});

export default Home;
