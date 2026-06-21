import React from 'react';
import { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TelaEstatisticas({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Historia</Text>
            <View style={styles.view}>
                <Text style={styles.texto_esquerda} >Os jogos eletrônicos surgiram na segunda metade do século XX como experimentos tecnológicos realizados em universidades e centros de pesquisa. Um dos primeiros exemplos foi Tennis for Two, criado em 1958, seguido por outros projetos que demonstravam o potencial da interação entre usuários e computadores. Com o avanço da tecnologia, os jogos passaram a despertar interesse comercial, dando origem a uma nova forma de entretenimento que rapidamente conquistou diferentes públicos.</Text>
            </View>
            <View style={styles.view}>
                <Text style={styles.texto_direita} >Durante as décadas de 1970 e 1980, a indústria dos videogames cresceu significativamente com o lançamento de consoles domésticos e máquinas de fliperama. Títulos clássicos ajudaram a popularizar o setor e estabeleceram gêneros que permanecem relevantes até hoje. Nesse período, os jogos deixaram de ser apenas demonstrações tecnológicas e passaram a oferecer experiências mais elaboradas, com desafios, narrativas e personagens marcantes.</Text>
            </View>
            <View style={styles.view}>
                <Text style={styles.texto_esquerda} >A partir dos anos 1990, a evolução dos gráficos, da capacidade de processamento e da conectividade transformou profundamente a forma como os jogos eram desenvolvidos e consumidos. O surgimento dos jogos online, dos dispositivos móveis e das plataformas digitais ampliou o alcance da indústria, tornando-a uma das mais lucrativas do mundo. Atualmente, os jogos eletrônicos fazem parte da cultura global, reunindo milhões de jogadores e influenciando áreas como educação, arte, esporte e entretenimento.</Text>
            </View>
        </View>
    )
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
  view: {
    backgroundColor: '#5a5a5a',
    padding: 8,
    margin: 20,
    borderRadius: 8,
    borderColor: '#1f1f1f',
    borderWidth: 4
  },
  texto_direita: {
    textAlign: 'right',
    fontWeight: '600',
    color: 'white',
  },
  texto_esquerda: {
    textAlign: 'left',
    fontWeight: '600',
    color: 'white',
  }
});