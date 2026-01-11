import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { VOICE_ICONS, VoiceName } from "@/constants/voices";

interface VoiceCardProps {
  voice: VoiceName;
  isSelected: boolean;
  onPress: () => void;
}

export default function VoiceCard({
  voice,
  isSelected,
  onPress,
}: VoiceCardProps) {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selectedContainer]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image
        source={VOICE_ICONS[voice]}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={[styles.text, isSelected && styles.selectedText]}>
        {voice}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: "#343435",
    alignItems: "center",
    gap: 15,
    padding: 12,
    borderRadius: 8,
  },
  selectedContainer: {
    backgroundColor: "#A099FF",
  },
  icon: {
    width: 40,
    height: 40,
  },
  text: {
    color: "#cdcdcdff",
    textTransform: "capitalize",
  },
  selectedText: {
    color: "#000",
    fontWeight: "600",
  },
});
