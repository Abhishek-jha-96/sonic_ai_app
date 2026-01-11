import { StyleSheet, View, Text } from "react-native";

export default function Avatar({name} : {name: string}) {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        borderRadius: 25,
        backgroundColor: "#d7d7d7ff",
    },
    mainText: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
})