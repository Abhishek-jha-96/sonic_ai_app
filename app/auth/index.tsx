import Divider from "@/components/ui/auth/divider";
import LoginOptionButton from "@/components/ui/auth/loginOptionButton";
import { Link, router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import SmsIcon from "@/assets/images/sms.svg";
import GoogleIcon from "@/assets/images/google.svg";


const icons = {
    sms: SmsIcon,
    google: GoogleIcon,
};

export default function LoginScreen() {
    const handleEmailSignInPress = () => {
        router.push("/auth/sign-up");    
    }

    return (
        <View style={styles.container}>
            {/* Header Text */}
            <View style={styles.headerTextContainer}>
                <Text style={styles.headTextMail}>Let's Get Started!</Text>
                <Text style={styles.headTextPara}>Discover the latest 1000+ Voice Effects</Text>
            </View>


            {/* Login with email */}
            <LoginOptionButton Icon={icons.sms} text="Continue with Email" onPressHandler={handleEmailSignInPress}/>

            <Divider />

            {/* Other Login Options */}
            <LoginOptionButton Icon={icons.google} text="Continue with Google" />


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
        flex: 1, // <--- this makes it take full screen
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
