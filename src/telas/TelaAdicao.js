import React from 'react';
import { useState, useContext  } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import { JogosContext } from '../navegacao/JogosContext';

export default function TelaAdicao({ navigation }) {
  const { jogos, setJogos } = useContext(JogosContext);
  const [nome,setNome] = useState('')
  const [genero,setGenero] = useState('')
  const [ano,setAno] = useState('')
  const [preco,setPreco] = useState('')

  function adicionarJogo() {
    if (nome.trim() === '' || genero.trim() === '' || ano.trim() === '' || preco.trim() === '') {
      setNome('')
      setGenero('')
      setAno('')
      setPreco('')
      alert()
      return
    }

    const novoJogo = {
       id : String(Date.now()), nome : nome, genero : genero, ano : ano, preco : preco
    }

    setJogos([...jogos,novoJogo])

    setNome('')
    setGenero('')
    setAno('')
    setPreco('')

    console.log('Jogo adicionado')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela Inicial</Text>
      <TextInput style={styles.input} placeholder='Nome' placeholderTextColor='#fff' value={nome} onChangeText={setNome}/>
      <TextInput style={styles.input} placeholder='Genero' placeholderTextColor='#fff' value={genero} onChangeText={setGenero}/>
      <TextInput style={styles.input} placeholder='Ano de lancamento' placeholderTextColor='#fff' value={ano} onChangeText={setAno} keyboardType='numeric'/>
      <TextInput style={styles.input} placeholder='Preco' placeholderTextColor='#fff' value={preco} onChangeText={setPreco} keyboardType='numeric'/>
      <Button onPress={adicionarJogo} title='salvar' color={'purple'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c2c2c',
  },
  texto: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 2,
    borderColor: '#1a1a1a',
    borderRadius: 5,
    padding: 5,
    margin: 10,
    backgroundColor: '#121212',
    color: 'white'
  }
});