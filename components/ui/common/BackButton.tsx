import AntDesign from '@expo/vector-icons/AntDesign';
import { Route, router } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface BackButtonProps {
  path: Route;
}

export default function BackButton({ path }: BackButtonProps) {
    const handleBackPress = () => {
        router.push(path);
    }
    return (
        <TouchableOpacity onPress={handleBackPress} style={styles.container}>
            <AntDesign name="caret-left" size={20} color="white" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 45,
        height: 45,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        backgroundColor: '#343435',
        position: 'absolute',
        top: 20,
        left: 20
    }
})