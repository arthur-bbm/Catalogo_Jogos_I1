import { React, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default function TelaAdicao({ navigation }) {
  const [jogos,setJogos] = useState([
    { nome : 'destiny', genero  : 'acao', ano : 2017, preco : 0}
  ])
  const [nome,setNome] = useState('')
  const [genero,setGenero] = useState('')
  const [ano,setAno] = useState('')
  const [preco,setPreco] = useState('')

  function adicionarJogo() {
    if (nome.trim() === '' || genero.trim() === '' || ano.trim() === '' || preco.trim() === '') {
      alert()
      return
    }

    const novoJogo = {
      nome : nome, genero : genero, ano : ano, preco : preco
    }

    setJogos([...jogos,novoJogo])
    setNome('')
    setGenero('')
    setAno('')
    setPreco('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela Inicial</Text>
      <TextInput style={styles.input} placeholder='Nome' value={nome} onChangeText={setNome}/>
      <TextInput style={styles.input} placeholder='Genero' value={genero} onChangeText={setGenero}/>
      <TextInput style={styles.input} placeholder='Ano de lancamento' value={ano} onChangeText={setAno}/>
      <TextInput style={styles.input} placeholder='Preco' value={preco} onChangeText={setPreco}/>
      <Button onPress={adicionarJogo} title='adicionar'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
    margin: 10,
  }
});