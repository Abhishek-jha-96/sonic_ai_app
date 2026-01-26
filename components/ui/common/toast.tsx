import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";

type ToastProps = {
  visible: boolean;
  message: string;
  duration?: number; // ms
  onClose: () => void;
};

export default function Toast({
  visible,
  message,
  duration = 3000,
  onClose,
}: ToastProps) {
  const opacity = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      // Fade in
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();

      // Auto close
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  const handleClose = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      onClose();
    });
  };

  if (!visible) return null;

  return (
    <Animated.View style={[styles.toast, { opacity }]}>
      <Text style={styles.message}>{message}</Text>

      <TouchableOpacity onPress={handleClose}>
        <Text style={styles.close}>✕</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  toast: {
    position: "absolute",
    bottom: 24,
    right: 16,
    maxWidth: "80%",
    backgroundColor: "#1f2937", // dark gray
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    elevation: 6,
  },
  message: {
    color: "#fff",
    flex: 1,
    marginRight: 12,
    fontSize: 14,
  },
  close: {
    color: "#9ca3af",
    fontSize: 16,
  },
});
