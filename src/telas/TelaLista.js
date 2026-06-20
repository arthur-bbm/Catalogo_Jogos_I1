import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TelaLista({ route }) {
  const { itemId, nome } = route.params || {}

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela Lista</Text>

      <View style={styles.container}>
        <Text>Item id - {itemId}</Text>
        <Text>nome - {nome}</Text>
      </View>
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
});