import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import ThemedInput from "@/components/ui/auth/themed-input";
import BackButton from "@/components/ui/common/BackButton";
import { Link } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import SmsIcon from "@/assets/images/sms.svg";
import LockIcon from "@/assets/images/lock.svg";
import { useSignIn } from "@clerk/clerk-expo";
import { isClerkAPIResponseError } from "@clerk/clerk-expo";
import { useState } from "react";
import Toast from "@/components/ui/common/toast";

const icons = {
  sms: SmsIcon,
  lock: LockIcon,
};

export default function SignInScreen() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignIn = async (data: any) => {
    const { email, password } = data;

    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });
      console.log(result.status)
      await setActive({ session: result.createdSessionId });
    } catch (err: unknown) {
      let message = "Something went wrong. Please try again.";
      if (isClerkAPIResponseError(err)) {
        message =
          err.errors?.[0]?.longMessage ||
          err.errors?.[0]?.message ||
          "Unable to sign in";
      }

      setToastVisible(false);
      setTimeout(() => {
        setToastMessage(message);
        setToastVisible(true);
      }, 50);
      control._reset();
    }
  };

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
              Icon={icons.sms}
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
              Icon={icons.lock}
              placeHolder="Password"
              value={value}
              onChangeText={onChange}
              secureTextEntry={true}
            />
          )}
        />

        {/* Sign Up Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleSubmit(handleSignIn)}
          style={styles.signUpButton}
          disabled={toastVisible}
        >
          <ThemedText style={styles.signUpButtonText}>Sign In</ThemedText>
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
      <Toast
        visible={toastVisible}
        message={toastMessage}
        duration={4000}
        onClose={() => setToastVisible(false)}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 120,
  },

  headerText: {
    textAlign: "center",
  },

  headerSubText: {
    textAlign: "center",
    maxWidth: 294,
    fontSize: 14,
    fontWeight: "400",
  },

  innerContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },

  signUpButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 324,
    height: 48,
    backgroundColor: "#B3B1FF",
    borderRadius: 12,
  },

  signUpButtonText: {
    color: "black",
    fontSize: 15,
    fontWeight: "600",
  },

  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
    marginTop: 10,
  },

  linkText: {
    color: "#B3B1FF",
  },

  footerText: {
    color: "white",
  },
});
