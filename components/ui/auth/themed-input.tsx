import { ThemedView } from "@/components/themed-view";
import { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextInput,
  useWindowDimensions,
} from "react-native";

interface ThemedInputProps {
  Icon: React.ComponentType<any>;
  placeHolder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

export default function ThemedInput({
  Icon,
  placeHolder,
  value,
  onChangeText,
  secureTextEntry,
}: ThemedInputProps) {
  const { width } = useWindowDimensions();
  const [isFocused, setIsFocused] = useState(false);
  const inputBoxWidth = width < 360 ? width * 0.8 : 320;

  return (
    <ThemedView
      style={[
        styles.container,
        { width: inputBoxWidth },
        isFocused && styles.focusedContainer,
      ]}
    >
      <Icon width={20} height={20} />
      <TextInput
        style={styles.inputContainer}
        placeholder={placeHolder}
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        underlineColorAndroid="transparent"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 56,
    backgroundColor: "#343435",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 12,
    gap: 20,
    borderWidth: 1,
    borderColor: "transparent",
  },
  focusedContainer: {
    borderColor: "#B3B1FF",
  },
  inputContainer: {
    flex: 1,
    color: "white",
    fontSize: 16,
    paddingVertical: 8,
    textAlignVertical: "center",
  },
});
