import { Image, StyleSheet } from "react-native";

export function SearchIcon(){

    return(
        <Image  
            source={require("../assets/searchIcon.png")}
            style={styles.image}
        />
    )
}

const styles = StyleSheet.create({
    image:{
        paddingLeft:18,
        height:25,
        width:25,
   
       
    }
})