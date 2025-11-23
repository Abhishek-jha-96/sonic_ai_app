import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, useWindowDimensions } from "react-native";

interface LoginOptionProps {
    Icon: React.ComponentType<any>;
    text: string;
    onPressHandler?: () => void
}

export default function LoginOptionButton({ Icon, text, onPressHandler }: LoginOptionProps) {
    const { width } = useWindowDimensions();
    
    const buttonWidth = width < 360 ? width * 0.8 : 284;

    return (
        <TouchableOpacity onPress={onPressHandler} style={[styles.container, { width: buttonWidth }]}>
            <Icon width={20} height={20} />
            <Text style={styles.text}>{text}</Text>
            <Text> </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
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