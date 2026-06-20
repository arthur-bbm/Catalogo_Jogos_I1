import React from 'react';
import { useContext } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

import { JogosContext } from '../navegacao/JogosContext';

export default function TelaLista({ navigation }) {
  const { jogos } = useContext(JogosContext);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela Lista</Text>

      <View>
        <FlatList data={jogos} keyExtractor={item => item.id} renderItem={({ item }) => (
          <View>
            <Text>Jogo - {item.nome} | Genero - {item.genero}</Text>
            <Text>Ano - {item.ano} | Preco - {item.preco}</Text>
          </View>
        )}/>
      </View>
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
});