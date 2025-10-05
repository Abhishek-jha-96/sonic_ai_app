import { ThemedView } from "@/components/themed-view";
import { Image, ImageSourcePropType, StyleSheet, TextInput, useWindowDimensions } from "react-native";

interface ThemedInputProps {
    imgPath: ImageSourcePropType
    placeHolder: string
}

export default function ThemedInput({imgPath, placeHolder}: ThemedInputProps) {
    const { width } = useWindowDimensions();
    const inputBoxWidth = width < 360 ? width * 0.8 : 320;

  return (
    <ThemedView style={[styles.container, { width: inputBoxWidth }]}>
        <Image source={imgPath} />
        <TextInput placeholder={placeHolder}></TextInput>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: 324,
        maxHeight: 72,
    }
})
