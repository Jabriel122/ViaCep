import { ScrollView } from "react-native";
import { ScrollViewHome, ContainerHome, LabelBox, TextLabel, TextInputHome, BoxContainer } from "./styles"
import { BoxInput } from "../../BoxInput";
import { useEffect, useState } from "react";
import Axios from "react-native-axios/lib/core/Axios";
import axios from "axios";
export function ScreenHome() {

    //hooks - states
    const [cep, setCep] = useState("")
    const [logradouro, setLogradouro] = useState('')
    const [cidade, setCidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [estado, setEstado] = useState('')
    const [uf, setUf] = useState('')
    //hooks - effect
    //chamada da API

    const Apiget = async () => {
        try {
            if (cep.length == 8) {
                const endereco = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                const state = await axios.get (`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}` )
                


                if (endereco.error) {
                    alert("Verifique o CEP")
                }
                setBairro(endereco.data.bairro)
                setCep(endereco.data.cep)
                setCidade(endereco.data.localidade)
                setEstado(state.data.nome)
                setLogradouro(endereco.data.logradouro)
                setUf(endereco.data.uf)
            };

        } catch (error) {
            alert("Deu erro pae!!!")
        }


    }

    useEffect(() => {
        //chamada da API
        Apiget() 
    }), [cep];

    //ScrollViewHome - ScrollView
    //ContainerHome - View
    //BoxInput - View
    //LabeyBox - View
    //TextLabel - Text
    //TextInputHome - TextInput
    //BoxContainer - View
    return (
        <ScrollViewHome>
            <ContainerHome>
                <BoxInput
                    textLabel="Informe o CEP"
                    placeholder="Cep..."
                    KeyType="numeric"
                    editable={true}
                    fieldWidth={100}
                    maxLenght={9}
                    fieldValue={cep}
                    onChangeText={(tx) => setCep(tx)}
                />
                <BoxInput
                    textLabel="Logradouro"
                    placeholder="Logradouro..."
                    KeyType="string"
                    editable={true}
                    fieldWidth={100}
                    // maxLenght={9}
                    fieldValue={logradouro}
                />
                <BoxInput
                    textLabel="Bairro"
                    placeholder="Bairro..."
                    KeyType="string"
                    editable={true}
                    fieldWidth={100}
                    fieldValue={bairro} 
                />
                <BoxInput
                    textLabel="Cidade"
                    placeholder="Cidade..."
                    KeyType="string"
                    editable={true}
                    fieldWidth={100}
                    fieldValue={cidade}
                />

                <BoxContainer>
                    <BoxInput
                        textLabel="Estado"
                        placeholder="Estado..."
                        KeyType="string"
                        editable={true}
                        fieldWidth={70}
                        fieldValue={estado}
                    />

                    <BoxInput
                        textLabel="Uf"
                        placeholder="Uf"
                        KeyType="string"
                        editable={true}
                        fieldWidth={20}
                        fieldValue={uf}
                    />
                </BoxContainer>

            </ContainerHome>
        </ScrollViewHome>
    )

}