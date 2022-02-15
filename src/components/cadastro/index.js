import React from "react";
import {TextInput ,View, Text } from "react-native";

export default function Cadastrar() {
    return (
        <View>
            <Text>Digite seu Nome</Text>
            <TextInput
            placeholder="Digite aqui" 
            keyboardType="default"/>
            
            <Text>Digite seu numero de Celular</Text>
            <TextInput placeholder="Ex. 11976451264" 
            keyboardType="number-pad"/>

            <Text>Digite sua Data de Nascimento</Text>
            <TextInput placeholder="Ex. 03062003"
            keyboardType="number-pad"/>
        </View>
    )
}