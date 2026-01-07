import { StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Welcome User</Text>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    },
    mainText: {
        color: "white",
        fontSize: 34,
        fontWeight: "bold",
    }
})