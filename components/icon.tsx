import { Image, useWindowDimensions } from "react-native";

export function IconImage() {
  const { width } = useWindowDimensions();

  const imageSize = Math.min(width / 1.5, 290);

  return (
    <Image
      source={require("../assets/umbrella.webp")}
      style={{ width: imageSize, height: imageSize,marginEnd:160,marginTop:30 }}
    />
  );
}