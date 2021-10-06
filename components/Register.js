import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from 'react-native';




export default function Register() {
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder="  Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          keyboardType="default"
          placeholder="  Password"
          secureTextEntry={true}
        />
        <Button
        title="S'inscrire"
        onPress={() => fetch('http://149.91.89.133:6088/inscription', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: email,
    password: password
  })
})    .then(response => response.json())
.then(data => {
  if(data){
    console.log(data)
  }else{
    error = "error"
    console.log(error)
  }
})}
/>

      </View>
      
    );
  };

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      backgroundColor: "white",
      borderRadius: 35,
    },
    container: {
      backgroundColor: "yellow",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 10,

    }
  });