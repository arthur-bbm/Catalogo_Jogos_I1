import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import NavegacaoBotom from "./src/navegacao/NavegacaoBotom"

const NavegadorAtual = NavegacaoBotom

export default function App() {
  return (
    <NavigationContainer>
      <NavegadorAtual />
    </NavigationContainer>
  )
}