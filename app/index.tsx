import CornerRadialGradient from "@/components/ui/CornerRadialGradient";
import { useSelector } from "react-redux";
import { Animated, StyleSheet, Text, View } from "react-native";
import { selectAuthStatus } from "@/store/User/userSlice";
import { useEffect, useRef } from "react";
import { router } from "expo-router";

export default function StartScreen() {
  const currAuthStatus = useSelector(selectAuthStatus);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currAuthStatus === "authenticated") {
        router.replace("/home");
      } else {
        router.replace("/auth");
      }
    }, 2200);

    return () => clearTimeout(timer);
  }, [currAuthStatus]);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  // blinking animation loop
  useEffect(() => {
    const blink = Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 360,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 360,
          useNativeDriver: true,
        }),
      ])
    );
    blink.start();

    return () => blink.stop(); // cleanup
  }, [fadeAnim]);

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
        Sonic <Animated.Text style={[styles.mainColoredText, { opacity: fadeAnim }]}>
          AI
          </Animated.Text>
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
    backgroundColor: "black",
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
