import { Image, useWindowDimensions } from "react-native";

export function ThunderIcon() {
  const { width } = useWindowDimensions();

  const imageSize = Math.min(width / 2, 100);

  return (
    <Image
      source={require("../assets/thunder.webp")}
      style={{ width: imageSize, height: imageSize,marginEnd:5,marginTop:-110 }}
    />
  );
}