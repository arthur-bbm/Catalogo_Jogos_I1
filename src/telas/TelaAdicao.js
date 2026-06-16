import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TelaAdicao({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela Inicial</Text>

      <Button
        title="Ir para Lista"
        onPress={() =>
          navigation.navigate('Lista', {
            itemId: 1,
            nome: 'Juca',
          })
        }
      />
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