import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Divider() {
    return (
        <View style={styles.container}>
            <View style={styles.divider}></View>
            <Text style={styles.text}>or</Text>
            <View style={styles.divider}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 16,
    },
    divider: {
        flex: 1,
        height: 1,
        width: 100,
        backgroundColor: "white",
    },
    text: {
        color: "white",
        marginHorizontal: 8,
    },
})
