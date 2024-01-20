import { View,Text,StyleSheet } from "react-native";

function SettingsScreen(){
return(
    <View style={styles.Container}>
        <Text>
            SettingsScreen
        </Text>
    </View>
);
}

export default SettingsScreen;

const styles=StyleSheet.create({
    Container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
        
    }
})