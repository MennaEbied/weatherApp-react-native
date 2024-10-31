import { Stack, Link } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Pressable } from "react-native";


export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{
          title: "Home" ,
          headerShown:false
            }} 
        />
        <Stack.Screen 
          name="weather"
          options={{
            title:'weather',
            animation:"fade",
            headerLeft:()=>(
              <Link  href="./" asChild>
              <Pressable hitSlop={20}style={{marginRight:18}}>
                <AntDesign name="arrowleft" size={24} color="black" />
              </Pressable>
              </Link>
            )

          }} 
        />
    </Stack>
  );
}