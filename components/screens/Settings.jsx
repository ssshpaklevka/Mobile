import * as React from "react"
import { Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

export default function Settings() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LinearGradient colors={["#FFCEB7", "#BACFFF", "#C7CFF2"]}>
        <Text>Settings!</Text>
      </LinearGradient>
    </View>
  )
}
