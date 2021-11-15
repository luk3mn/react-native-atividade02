{/* 
  Author: Lucas Renan Maues Nunes 
  Versão: 1.0
  Data: 15/11/2021
*/}

import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={estilo.boxText}>
        <Text style={estilo.galleryName}>Galeria de imagens do Lucas R. M. Nunes</Text>
        <Text style={estilo.galleryTheme}>Tecnologia e animes</Text>
      </View>
      <View style={estilo.boxImage}>
        {/* Imagens internas */}
        <Image source={require('./src/images/konoha.png')}
          style={estilo.images}>
        </Image>
        <Image source={require('./src/images/js.jpg')}
          style={estilo.images}>
        </Image>
        <Image source={require('./src/images/snk.jpg')}
          style={estilo.images}>
        </Image>
        <Image source={require('./src/images/pythonCode.jpg')}
          style={estilo.images}>
        </Image>
        <Image source={require('./src/images/ds.jpg')}
          style={estilo.images}>
        </Image>
        <Image source={require('./src/images/stainsGate.jpg')}
          style={estilo.images}>
        </Image>

        {/* Imagem externa */}
        <Image source={{uri: 'https://www.portalgsti.com.br/media/uploads/marcomascarenhas/banco-de-dados-mysql.jpg'}} 
          style={estilo.images} resizeMode='center'>
        </Image>
      </View>
    </View>
  );
}

{/* Estilando a galeria */}
const estilo = StyleSheet.create({
  boxImage: { // Estilização do flex box com as imagens internas
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  externalImage: { // Estilização da imagem externa
    flex: 1,
    alignItems: 'center'
  },
  images: {
    flex: 1,
    height: 100,
    width: 100,
    resizeMode: 'cover'
  },
  boxText: {
    marginHorizontal: 20, // Margin nas laterais
    marginVertical: 15 // Margin em cima e em baxio
  },
    galleryName: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 700,
    textAlign: 'center',
    color: '#2a4479'
  },
  galleryTheme: {
    fontSize: 15,
    fontWeight: 600,
    textAlign: 'center',
    color: '#c92626'
  }
})