import VoiceCard from "@/components/ui/voice/voiceCard";
import { VoiceName } from "@/constants/voices";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const voices = [
  "adam",
  "bella",
  "emma",
  "george",
  "isabella",
  "lewis",
  "michael",
  "nicole",
  "sarah",
] as const;

export default function AudioGen() {
  const [scriptText, setScriptText] = useState("");
  const [selectedVoice, setSelectedVoice] = useState<VoiceName | null>(null);

  const handleBackPress = () => {
    router.push("/home");
  };

  const handleTextChange = (text: string) => {
    if (text.length <= 500) {
      setScriptText(text);
    }
  };

  const handleVoiceSelect = (voice: VoiceName) => {
    setSelectedVoice(voice);
  };

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backbutton}>
          <AntDesign name="caret-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={[styles.text, styles.headerText]}>Script to Speech</Text>
      </View>

      {/* Script Section */}
      <View style={styles.scriptContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add you script here."
          placeholderTextColor="#6e6e6eff"
          multiline
          value={scriptText}
          onChangeText={handleTextChange}
          maxLength={500}
        />
        <Text style={styles.charCount}>{scriptText.length} / 500</Text>
      </View>

      {/* Voice Section */}
      <View style={styles.voiceContainer}>
        <Text style={[styles.text, styles.voiceText]}>Select Voice</Text>
        <View style={styles.voiceCardSection}>
          {voices.map((voice) => (
            <VoiceCard
              key={voice}
              voice={voice}
              isSelected={selectedVoice === voice}
              onPress={() => handleVoiceSelect(voice)}
            />
          ))}
        </View>
      </View>

      {/* Generate Section */}
      <TouchableOpacity style={styles.generateButton}>
        <Text style={[styles.text, styles.generateButtonText]}>Generate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 24,
    justifyContent: "space-between",
  },
  backbutton: {
    width: 40,
    height: 40,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#343435",
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 60,
  },
  scriptContainer: {
    gap: 12,
  },
  voiceContainer: {
    gap: 20,
  },
  voiceCardSection: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    color: "white",
    height: 150,
    borderRadius: 4,
    backgroundColor: "#262626ff",
    padding: 12,
  },
  voiceText: {
    fontSize: 18,
    fontWeight: "medium",
  },
  charCount: {
    color: "#6e6e6eff",
    textAlign: "right",
  },
  generateButton: {
    width: "100%",
    height: 48,
    borderRadius: 8,
    backgroundColor: "#A099FF",
    alignItems: "center",
    justifyContent: "center",
  },
  generateButtonText: {
    fontFamily: "Sans",
    fontSize: 16,
    fontWeight: "semibold",
  }
});
