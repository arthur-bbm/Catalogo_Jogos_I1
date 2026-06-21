import React from 'react';
import { useContext } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { JogosContext } from '../navegacao/JogosContext';

export default function TelaLista({ navigation }) {
  const { jogos, setJogos } = useContext(JogosContext);

  function removerJogo(id) {
    setJogos(lista => lista.filter(item => item.id !== id));
    console.log('Jogo removido')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogos Cadastrados</Text>
      <FlatList data={jogos} keyExtractor={item => item.id} renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.texto}>JOGO - {item.nome} | GENNERO - {item.genero}</Text>
            <Text style={styles.texto}>ANO - {item.ano} | PRECO - {item.preco}</Text>
            <Button color='red' title='remover' onPress={() => removerJogo(item.id)}/>
          </View>
        )}/>
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
  titulo: {
    fontSize: 20,
    margin: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: 'purple',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  texto: {
    padding: 5,
    fontWeight: 'bold',
    color: 'white'
  }
});