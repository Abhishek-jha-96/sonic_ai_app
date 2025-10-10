import { ThemedView } from "@/components/themed-view";
import { useState } from "react";
import { Image, ImageSourcePropType, StyleSheet, TextInput, useWindowDimensions } from "react-native";

interface ThemedInputProps {
    imgPath: ImageSourcePropType
    placeHolder: string
}

export default function ThemedInput({ imgPath, placeHolder }: ThemedInputProps) {
    const { width } = useWindowDimensions();
    const [isFocused, setIsFocused] = useState(false);
    const inputBoxWidth = width < 360 ? width * 0.8 : 320;


    return (
        <ThemedView
            style={[
                styles.container,
                { width: inputBoxWidth },
                isFocused && styles.focusedContainer, // highlight border when focused
            ]}
        >
            <Image source={imgPath} />
            <TextInput
                style={styles.inputContainer}
                placeholder={placeHolder}
                placeholderTextColor="rgba(255, 255, 255, 0.5)" // less opaque placeholder
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                underlineColorAndroid="transparent"
            />
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 56,
        backgroundColor: '#343435',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 12,
        gap: 20,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    focusedContainer: {
        borderColor: '#B3B1FF', // highlight color when input is focused
    },
    inputContainer: {
        flex: 1,
        height: 24,
        color: 'white',
    },
})
