import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import ThemedInput from '@/components/ui/auth/themed-input'

const icons = {
  sms: require("../../../assets/images/sms.svg")
}

export default function SignUpScreen() {
    return (
        <ThemedView>
            <ThemedText>Sign Up</ThemedText>
            <ThemedInput imgPath={icons.sms} placeHolder={'Email'} />
        </ThemedView>
    )
}
