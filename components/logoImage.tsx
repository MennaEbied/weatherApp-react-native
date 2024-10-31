import { Image, useWindowDimensions } from "react-native";

export function LogoImage() {
  const { width } = useWindowDimensions();

  const imageSize = Math.min(width / 1.2, 400);

  return (
    <Image
      source={require("../assets/logo2.webp")}
      style={{ width: imageSize, height: imageSize,marginTop:-180 }}
    />
  );
}