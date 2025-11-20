import GoogleIcon from "@/assets/images/google.svg";
import SmsIcon from "@/assets/images/sms.svg";
import Divider from "@/components/ui/auth/divider";
import LoginOptionButton from "@/components/ui/auth/loginOptionButton";
import { useLazyGetUserInfoQuery } from "@/store/User/googleAuthApi";
import { addUser, loginSuccess } from "@/store/User/userSlice";
import * as Google from "expo-auth-session/providers/google";
import { Link, router } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

WebBrowser.maybeCompleteAuthSession();

const icons = {
    sms: SmsIcon,
    google: GoogleIcon,
};

export default function LoginScreen() {
    const dispatch = useDispatch();
    const [request, response, promptAsync] = Google.useAuthRequest({
        // TODO: Replace with actual Client IDs from Google Cloud Console
        iosClientId: "GOOGLE_GUID.apps.googleusercontent.com",
        androidClientId: "GOOGLE_GUID.apps.googleusercontent.com",
        webClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    });

    const [triggerGetUserInfo, { data: userInfo }] = useLazyGetUserInfoQuery();

    useEffect(() => {
        if (response?.type === "success") {
            const { authentication } = response;
            if (authentication?.accessToken) {
                triggerGetUserInfo(authentication.accessToken);
            }
        }
    }, [response]);

    useEffect(() => {
        if (userInfo) {
            console.log("User Info:", userInfo);
            const user = {
                id: userInfo.id,
                name: userInfo.name,
                email: userInfo.email,
            };
            dispatch(addUser(user));
            dispatch(loginSuccess({ userId: user.id, token: response?.type === "success" ? response.authentication?.accessToken || "" : "" }));
            // Navigate or perform other actions if needed
        }
    }, [userInfo]);

    const handleEmailSignInPress = () => {
        router.push("/auth/sign-up");
    }

    const handleGoogleSignIn = () => {
        promptAsync();
    }

    return (
        <View style={styles.container}>
            {/* Header Text */}
            <View style={styles.headerTextContainer}>
                <Text style={styles.headTextMail}>Let's Get Started!</Text>
                <Text style={styles.headTextPara}>Discover the latest 1000+ Voice Effects</Text>
            </View>


            {/* Login with email */}
            <LoginOptionButton Icon={icons.sms} text="Continue with Email" onPressHandler={handleEmailSignInPress} />

            <Divider />

            {/* Other Login Options */}
            <LoginOptionButton Icon={icons.google} text="Continue with Google" onPressHandler={handleGoogleSignIn} />


            {/* Already have an account? Sign in */}
            <View style={styles.footerTextContainer}>
                <Text style={styles.headTextPara}>Already have an account?</Text>
                <Link href="/auth"><Text style={styles.linkText}>Sign in</Text></Link>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12
    },
    headerTextContainer: {
        gap: 4
    },
    headTextMail: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'medium',
        textAlign: 'center',
    },
    headTextPara: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'light',
        textAlign: 'center',
    },
    linkText: {
        color: '#B3B1FF',
        fontSize: 13,
        fontWeight: 'light',
        textAlign: 'center',
    },
    footerTextContainer: {
        flexDirection: 'row',
        gap: 4
    }
})
