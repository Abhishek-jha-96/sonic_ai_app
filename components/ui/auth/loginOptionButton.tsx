import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity } from "react-native";

interface LoginOptionProps {
    imgPath: ImageSourcePropType;
    text: string;
}

export default function LoginOptionButton({ imgPath, text }: LoginOptionProps) {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={imgPath} />
            <Text style={styles.text}>{text}</Text>
            <Text> </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: 324,
        maxHeight: 72,
        backgroundColor: '#343435',
        paddingHorizontal: 16,
        paddingVertical: 13,
        gap: 32,

        // optional: for row layout
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
    },

    text: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'regular',
    }
})