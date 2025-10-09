import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import ThemedInput from '@/components/ui/auth/themed-input'
import { Link } from 'expo-router'
import { StyleSheet, TouchableOpacity } from 'react-native'

const icons = {
    sms: require("../../../assets/images/sms.svg"),
    lock: require("../../../assets/images/lock.svg"),
}

export default function SignUpScreen() {
    return (
        <ThemedView style={styles.mainContainer}>
            <ThemedView style={styles.innerContainer}>
                {/* Header */}
                <ThemedView>
                    <ThemedText type="subtitle" style={styles.headerText}>
                        Create Your Account 🔐
                    </ThemedText>
                    <ThemedText type='default' style={styles.headerSubText}>
                        Join now and unlock 1000+ voice effects instantly
                    </ThemedText>
                </ThemedView>

                {/* Inputs */}
                <ThemedInput
                    imgPath={icons.sms}
                    placeHolder="Email"
                />
                <ThemedInput
                    imgPath={icons.lock}
                    placeHolder="Password"
                />
                <ThemedInput
                    imgPath={icons.lock}
                    placeHolder="Confirm Password"
                />

                {/* Sign Up Button */}
                <TouchableOpacity activeOpacity={0.8} style={styles.signUpButton}>
                    <ThemedText style={styles.signUpButtonText}>
                        Sign Up
                    </ThemedText>
                </TouchableOpacity>

                {/* Footer */}
                <ThemedView style={styles.footerContainer}>
                    <ThemedText>
                        Already have an account ?
                    </ThemedText>
                    <TouchableOpacity>
                        <ThemedText style={styles.linkText}>
                            <Link href="/auth/sign-in">Sign In</Link>
                        </ThemedText>
                    </TouchableOpacity>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 64,
    },
    headerText: {
        textAlign: 'center',
    },
    headerSubText: {
        textAlign: 'center',
        maxWidth: 294,
        fontSize: 14,
        fontWeight: 'regular',
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20
    },
    signUpButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 324,
        height: 48,
        backgroundColor: '#B3B1FF',
        paddingHorizontal: 16,
        paddingVertical: 13,
        gap: 32,
        borderRadius: 12,
    },
    signUpButtonText: {
        color: 'Black',
        fontSize: 15,
        fontWeight: 'semibold',
    },
    footerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 4,
    },
    linkText: {
        color: '#B3B1FF',
        textAlign: 'center',
    }
})