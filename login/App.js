//React Navigation - Stack Navigator Example

import React, {useState} from 'react';
import { Pressable,Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Button}from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

function Home({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState(''); 
  const [erro, setErro] = useState(false);

   function confirma(){
   if (login == "Amogus" && senha == "Tutu")
   {
      alert ("Logado com sucesso");
      navigation.navigate('Voltar');
      setLogin("");
      setSenha("");
      setErro(false);
   }
   else
   {
      alert ("Erro no login");
      setErro(true);
   } 
  }

  return (
    <View style={styles.container}>

      <TextInput style = {styles.campo} value = {login} placeholderTextColor="#fff" placeholder="Login" onChangeText={(login)=>setLogin(login)}/>

      <TextInput style = {styles.campo} value = {senha} placeholderTextColor="#fff" placeholder="Senha" onChangeText={(senha)=>setSenha(senha)} secureTextEntry/>

      <TouchableOpacity style = {styles.botao} onPress = {confirma}>
      <Text styles = {styles.textobotao}> Entrar </Text>
      </TouchableOpacity> 
      {erro
      ?
      <View style={styles.container}> 
      <Text style={styles.erro}>
        Acesso Negado
      </Text>
      <Image style={styles.imagem} resizeMode='contain' source={{uri:"http://www.goldensolucoes.com.br/wp-content/uploads/2016/09/Proibido.jpg"}} /> 
      </View>  
      : <Text></Text>
       } 

    </View>
  );
}

function Logado({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Logado com sucesso</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela de login" component={Home} />
        <Stack.Screen name="Voltar" component={Logado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#808080',
    padding: 5,
    alignItems: 'center'
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 25,
  },
  campo: {
    backgroundColor:'#121212',
    borderRadius:10,
    fontSize: 23,
    color: "#ffff",
    margin: 10,
    padding: 10
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: '#41AEf4',
    padding: 10
  },
  textobotao: {
    fontSize: 25,
    color: '#fff'
  },
  imagem: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  erro: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
    color: "#FF0000",
  },
});
