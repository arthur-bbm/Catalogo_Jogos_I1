import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaAdicao from "../telas/TelaAdicao";
import TelaLista from "../telas/TelaLista";

const Tab = createBottomTabNavigator()

export default function NavegacaoBotom() {
    return (
        <Tab.Navigator>
            <Tab.screen name='Adicao' component={TelaAdicao}/>
            <Tab.screen name='Lista' component={TelaLista}/>
        </Tab.Navigator>
    )
}