import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import ThemedInput from "@/components/ui/auth/themed-input";
import BackButton from "@/components/ui/common/BackButton";
import { Link } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, TouchableOpacity } from "react-native";

const icons = {
  sms: require("../../../assets/images/sms.svg"),
  lock: require("../../../assets/images/lock.svg"),
};

export default function SignInScreen() {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <ThemedView style={styles.mainContainer}>
      <BackButton path="/auth" />
      <ThemedView style={styles.innerContainer}>
        {/* Header */}
        <ThemedView>
          <ThemedText type="subtitle" style={styles.headerText}>
            Welcome Back! 👋
          </ThemedText>
          <ThemedText type="default" style={styles.headerSubText}>
            Great to see you again, You've been missed!
          </ThemedText>
        </ThemedView>

        {/* Inputs */}
        <Controller
          control={control}
          name="email"
          rules={{ required: "Email is required" }}
          render={({ field: { onChange, value } }) => (
            <ThemedInput
              imgPath={icons.sms}
              placeHolder="Email"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{ required: "Password is required" }}
          render={({ field: { value, onChange } }) => (
            <ThemedInput
              imgPath={icons.lock}
              placeHolder="Password"
              value={value}
              onChangeText={onChange}
              secureTextEntry={true}
            />
          )}
        />

        {/* Sign Up Button */}
        <TouchableOpacity activeOpacity={0.8} style={styles.signUpButton}>
          <ThemedText style={styles.signUpButtonText}>Sign Up</ThemedText>
        </TouchableOpacity>

        {/* Footer */}
        <ThemedView style={styles.footerContainer}>
          <ThemedText>Don’t Have an Account</ThemedText>
          <TouchableOpacity>
            <ThemedText style={styles.linkText}>
              <Link href="/auth/sign-up">Sign Up</Link>
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 120,
  },
  headerText: {
    textAlign: "center",
  },
  headerSubText: {
    textAlign: "center",
    maxWidth: 294,
    fontSize: 14,
    fontWeight: "regular",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  signUpButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 324,
    height: 48,
    backgroundColor: "#B3B1FF",
    paddingHorizontal: 16,
    paddingVertical: 13,
    gap: 32,
    borderRadius: 12,
  },
  signUpButtonText: {
    color: "Black",
    fontSize: 15,
    fontWeight: "semibold",
  },
  footerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },
  linkText: {
    color: "#B3B1FF",
    textAlign: "center",
  },
});
