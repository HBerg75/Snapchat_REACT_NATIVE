import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storeData from './setToken';




export default function Login({navigation}) {
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    
    const submit = fetch('http://149.91.89.133:6088/connection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })    
    
    .then(response => response.json())
    .then(data => {
      if(data.status == 200){
      storeData(data.data.token)
      navigation.navigate('Camera')
        console.log(data)
        console.log(data.data.token)
        
      } else {
        console.log('error')
      }
    })


  
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
        title="Connexion"
        onPress={ async () => submit }
      />

<Button
        title="S'inscrire"
        onPress={() => navigation.navigate('Inscription')}
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