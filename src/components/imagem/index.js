import React, {useState} from "react";
import {StyleSheet ,View, Image, Button } from "react-native";
import Cadastrar from "../cadastro";

export default function Imagem() {

    const [img, setImg] = useState(<Image style={{width: 150, height:250}} source={require('../../../assets/eren.png')}/>)
    const [textButton, setTextButton] = useState("Clique Aqui")

    function cadastro() {
        setImg((Cadastrar()))
        setTextButton("Cadastrar")
    }

    return(
        <View>
            {img}
            
            <View style={styles.botao}>
                <Button onPress={() => cadastro()} color="#2D858E" title={textButton}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    botao: {
        marginVertical: 2,
        borderBottomColor: 'green',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});