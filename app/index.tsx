import CornerRadialGradient from "@/components/ui/CornerRadialGradient";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      {/* Top Left */}
      <CornerRadialGradient
        positionStyle={styles.topLeft}
        size={320}
        opacity={0.25}
        colors={["#B4B2FF", "#B4B2FF"]}
        cx="30%"
        cy="30%"
      />

      <Text style={styles.mainText}>
        Sonic <Text style={styles.mainColoredText}>AI</Text>
      </Text>

      {/* Bottom Right */}
      <CornerRadialGradient
        positionStyle={styles.bottomRight}
        size={320}
        opacity={0.25}
        colors={["#B4B2FF", "#B4B2FF"]}
        cx="70%"
        cy="70%"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black", // contrast background
    overflow: "hidden",
  },
  mainText: {
    color: "white",
    fontSize: 34,
    fontWeight: "500",
  },
  mainColoredText: {
    color: "#B4B2FF",
    fontSize: 34,
    fontWeight: "500",
  },
  topLeft: {
    position: "absolute",
    top: -50,
    left: -50,
  },
  bottomRight: {
    position: "absolute",
    bottom: -50,
    right: -50,
  },
});
