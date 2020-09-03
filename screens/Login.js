import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';


function Login(){

    const [blank, setBlank] = useState("")

    return (
        <View>
            <TextInput placeholder ="Username">{blank}</TextInput>
            <TextInput placeholder ="Password">{blank}</TextInput>
            <Button 
                title="Login"
                onPress = { () => {
                    alert("Done")
                    setBlank("")
                }}
                />
        </View>
    )

}