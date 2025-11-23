import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import ThemedInput from "@/components/ui/auth/themed-input";
import BackButton from "@/components/ui/common/BackButton";
import { useCreateUserMutation } from "@/store/User/userApi";
import { Link } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, TouchableOpacity } from "react-native";
import SmsIcon from "@/assets/images/sms.svg";
import LockIcon from "@/assets/images/lock.svg";


const icons = {
  sms: SmsIcon,
  lock: LockIcon,
};

export default function SignUpScreen() {
  const auth_provider = "email";
  const [createUser, { isLoading }] = useCreateUserMutation();

  // React Hook Form
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");

  const handleSignUp = async (values: any) => {
    console.log("logging with email");
    if (auth_provider === "email") {
      const { email, password } = values;
      try {
        console.log(email, password, auth_provider);
        const user = await createUser({
          email,
          password,
          auth_provider,
        }).unwrap();
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    } else if (auth_provider === "google") {
      // will add google oauth related flow later.
      console.log("Sign up with Google");
    }
  };

  return (
    <ThemedView style={styles.mainContainer}>
      <BackButton path="/auth" />
      <ThemedView style={styles.innerContainer}>
        {/* Header */}
        <ThemedView>
          <ThemedText type="subtitle" style={styles.headerText}>
            Create Your Account 🔐
          </ThemedText>
          <ThemedText type="default" style={styles.headerSubText}>
            Join now and unlock 1000+ voice effects instantly
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
        {/* Password Input */}
        <Controller
          control={control}
          name="password"
          rules={{ required: "Password is required" }}
          render={({ field: { onChange, value } }) => (
            <ThemedInput
              Icon={icons.lock}
              placeHolder="Password"
              value={value}
              onChangeText={onChange}
              secureTextEntry={true}
            />
          )}
        />

        {/* Confirm Password */}
        <Controller
          control={control}
          name="confirmPassword"
          rules={{
            validate: (v) => v === password || "Passwords do not match",
          }}
          render={({ field: { onChange, value } }) => (
            <ThemedInput
              Icon={icons.lock}
              placeHolder="Confirm Password"
              value={value}
              onChangeText={onChange}
              secureTextEntry={true}
            />
          )}
        />

        {/* Sign Up Button */}
        <TouchableOpacity
          onPress={handleSubmit(handleSignUp)}
          activeOpacity={0.8}
          style={styles.signUpButton}
        >
          <ThemedText style={styles.signUpButtonText}>Sign Up</ThemedText>
        </TouchableOpacity>

        {/* Footer */}
        <ThemedView style={styles.footerContainer}>
          <ThemedText>Already have an account ?</ThemedText>
          <TouchableOpacity>
            <ThemedText style={styles.linkText}>
              <Link href="/auth/sign-in">Sign In</Link>
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
