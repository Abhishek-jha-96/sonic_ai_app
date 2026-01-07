import { StyleSheet, Text, View } from "react-native";

export default function TTSCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>TTS Card</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    mainText: {
        color: "white",
        fontSize: 34,
        fontWeight: "bold",
    },
});