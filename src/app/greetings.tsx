import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "../styles/breathingCircleStyles";
import { colors } from "../styles/colors";

export default function Greetings() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={[colors.pink[100], colors.blue[100]]}
      style={styles.container}
    >
      <View>
        <Text>Parabéns, continue assim!</Text>
      </View>

      <View>
        <Pressable onPress={() => router.push("./home")}>
          <Text>Voltar</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}
