import GoogleIcon from "@/assets/images/google.svg";
import SmsIcon from "@/assets/images/sms.svg";
import Divider from "@/components/ui/auth/divider";
import LoginOptionButton from "@/components/ui/auth/loginOptionButton";
import { addUser, loginSuccess } from "@/store/User/userSlice";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { useSignUp } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";

const icons = {
  sms: SmsIcon,
  google: GoogleIcon,
};

export default function LoginScreen() {
  const dispatch = useDispatch();
  const { signUp, isLoaded } = useSignUp();

  const handleGoogleSignIn = async () => {
    if (!isLoaded) return;

    const redirectUrl = Linking.createURL("/");

    await signUp.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl,
      redirectUrlComplete: redirectUrl,
    });
  };

  const handleEmailSignInPress = () => {
    router.push("/auth/sign-in");
  };

  return (
    <View style={styles.container}>
      {/* Header Text */}
      <View style={styles.headerTextContainer}>
        <Text style={styles.headTextMail}>Let's Get Started!</Text>
        <Text style={styles.headTextPara}>
          Discover the latest 1000+ Voice Effects
        </Text>
      </View>

      {/* Login with email */}
      <LoginOptionButton
        Icon={icons.sms}
        text="Continue with Email"
        onPressHandler={handleEmailSignInPress}
      />

      <Divider />

      {/* Other Login Options */}
      <LoginOptionButton
        Icon={icons.google}
        text="Continue with Google"
        onPressHandler={handleGoogleSignIn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  headerTextContainer: {
    gap: 4,
  },
  headTextMail: {
    color: "white",
    fontSize: 20,
    fontWeight: "medium",
    textAlign: "center",
  },
  headTextPara: {
    color: "white",
    fontSize: 13,
    fontWeight: "light",
    textAlign: "center",
  },
  linkText: {
    color: "#B3B1FF",
    fontSize: 13,
    fontWeight: "light",
    textAlign: "center",
  },
  footerTextContainer: {
    flexDirection: "row",
    gap: 4,
  },
});
