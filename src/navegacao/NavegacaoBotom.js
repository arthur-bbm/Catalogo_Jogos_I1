import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaAdicao from "../telas/TelaAdicao";
import TelaLista from "../telas/TelaLista";

const tab = createBottomTabNavigator()

export default function NavegacaoBotom() {
    return (
        <TabNavigator>
            <Tab.screen name='Adicao' component={TelaAdicao}/>
            <Tab.screen name='Lista' component={TelaLista}/>
        </TabNavigator>
    )
}