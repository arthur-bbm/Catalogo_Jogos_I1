import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import NavegacaoBotom from "./src/navegacao/NavegacaoBotom"
import { JogosProvider } from './src/navegacao/JogosContext';

const NavegadorAtual = NavegacaoBotom

export default function App() {
  return (
    <JogosProvider>
      <NavigationContainer>
        <NavegadorAtual />
      </NavigationContainer>
    </JogosProvider>
  )
}