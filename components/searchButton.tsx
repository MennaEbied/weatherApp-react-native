import { theme } from "../theme";
import { StyleSheet, Text, Pressable } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export function SearchButton({ title, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
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
    backgroundColor:theme.color5,
    marginTop:30,
    width:200,
  },
});
