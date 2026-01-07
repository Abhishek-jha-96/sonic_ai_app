import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./welcomeScreen";
import TTSCard from "./ttsCard";

export default function AudioGenScreen() {
    return (
        <View style={styles.container}>
            <WelcomeScreen />
            <TTSCard />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    }
});