import Avatar from "@/components/ui/avatar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SpeechIcon from "@/assets/images/speech.svg";
import { router } from "expo-router";

export default function HomeScreen() {
  
  const handleCreatePress = () => {
    router.push("/audio_gen");
  };
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Avatar name={"JD"} />
        <Text style={styles.mainText}>Welcome Back!</Text>
      </View>

      <LinearGradient
        colors={["#9CFFAC", "#88C2FF", "#C2A5FF", "#FFADDB"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.stsContainer}
      >
        <View style={styles.logoSection}>
          <SpeechIcon width={40} height={40} />
          <View>
            <Text style={styles.stsText}>Script to Speech</Text>
            <Text>Change your script to speech</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleCreatePress}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    rowGap: 50,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  mainText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  logoSection: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
  },
  stsContainer: {
    borderRadius: 12,
    padding: 16,
    rowGap: 12,
  },
  stsText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0a0a0a",
  },
  button: {
    width: "100%",
    backgroundColor: "#262626",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "400",
    alignSelf: "center",
  },
});
