import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaAdicao from "../telas/TelaAdicao";
import TelaLista from "../telas/TelaLista";
import TelaEstatisticas from "../telas/TelaEstatisticas";

const Tab = createBottomTabNavigator()

export default function NavegacaoBotom() {
    return (
        <Tab.Navigator initialRouteName="Adicionar" screenOptions={{headerShown: false}}>
            <Tab.Screen name='Adicionar' component={TelaAdicao}/>
            <Tab.Screen name='Lista' component={TelaLista}/>
            <Tab.Screen name="Estatisticas" component={TelaEstatisticas}/>
        </Tab.Navigator>
    )
}