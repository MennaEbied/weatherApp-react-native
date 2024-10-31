import { StyleSheet, useWindowDimensions } from "react-native";

const { width } = useWindowDimensions();
const imageSize = Math.min(width / 1.3, 500);

export const imageStyles=StyleSheet.create({
    images:{
        width:imageSize,
        height:imageSize
    }
})