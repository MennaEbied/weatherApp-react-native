import { theme } from "../theme";
import { StyleSheet, Text, Pressable, Platform } from "react-native";
import * as Haptics from "expo-haptics";

type Props = {
  title: string;
  onPress: () => void;
};

export function SearchButton({ title, onPress }: Props) {

  const handlePress = ()=>{
    if(Platform.OS !=="web"){
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
        onPress();
    }
  return(
    <Pressable 
        onPress={handlePress} 
        style={(state)=>{
          if(state.pressed){
              return [styles.button,styles.buttonPressed];
          }
          return styles.button;
      }}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
  )
  
}

const styles = StyleSheet.create({
  text: {
    color: theme.colorBlack,
    fontSize: 18,
    fontWeight: "bold",
    textAlign:"center"
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 50,
    backgroundColor:theme.colorYellow,
    marginTop:10,
    width:250,
  },
  buttonPressed:{
    backgroundColor:theme.colorBrightYellow
  }
});
