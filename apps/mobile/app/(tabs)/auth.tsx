import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Auth() {
  return (
    <View>
      <Text>Auth</Text>
      <Link href="/"> Go to Home</Link>
    </View>
  );
}
