import { StatusBar } from "expo-status-bar";
import { StyleSheet, View ,TextInput } from "react-native";
import React , {useState} from "react";
import {useRouter} from "expo-router";
import { LogoImage } from "../components/logoImage";
import { theme } from "../theme";
import { SearchButton } from "../components/searchButton";
import { SearchIcon } from "../components/searchIcon";
import { IconImage } from "../components/icon";
import { ThunderIcon } from "../components/thunder";



export default function HomeScreen() {

  const [city,setCity] = useState("");
  const router = useRouter();

  const handleSearch = ()=>{
    router.push(`/weather?city=${city}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <SearchIcon/>
        <TextInput
          placeholder="Enter a city" 
          value={city}
          onChangeText={setCity} 
        />
      </View>
      <SearchButton title="Get Weather" onPress={handleSearch}/>
        <IconImage/>
        <LogoImage/>
        <ThunderIcon/>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor:theme.colorBlue,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop:70,
    padding:16,
  },
  search:{
    flexDirection:"row",
    alignItems:"center",
    margin:10,
    height:50,
    borderWidth:1,
    borderRadius:25,
    width:"100%",
    paddingLeft:12,
    backgroundColor:theme.colorWhite,
    borderColor:theme.colorBlack,
    
  },

});
