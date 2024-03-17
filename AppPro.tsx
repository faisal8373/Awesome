import React from "react";
import { 
    SafeAreaView, 
    View, 
    Text,
    StyleSheet,
    useColorScheme
} from "react-native";
import FlatCards from "./components/FlatCards";

function AppPro() : JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
  return (
    
      <View style={styles.container}>
      <FlatCards />
        
      
      </View>
    
  );
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    },
    whiteText: {
        color: '#ffffff'
    },
    darkText: {
        color: '#000000'
    }
})
export default AppPro;