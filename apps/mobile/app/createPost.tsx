import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function CreatePost() {
  return (
    <View>
      <Text>CreatePost</Text>
      <Link href="/"> Go to Home</Link>
    </View>
  );
}
