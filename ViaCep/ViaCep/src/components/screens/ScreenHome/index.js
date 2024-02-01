import { ScrollView } from "react-native";
import { ScrollViewHome, ContainerHome, LabelBox, TextLabel, TextInputHome, BoxContainer } from "./styles"
import { BoxInput } from "../../BoxInput";
export function ScreenHome() {



    //hooks - states

    //hooks - effect
    //chamada da API


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
                    maxLenght={9}
                />
                <BoxInput
                    textLabel="Logradouro"
                    placeholder="Logradouro..."
                    KeyType="string"
                    maxLenght={9}
                />
                <BoxInput
                    textLabel="Bairro"
                    placeholder="Bairro..."
                    KeyType="string"
                    maxLenght={9}
                />
                <BoxInput
                    textLabel="Cidade"
                    placeholder="Cidade..."
                    KeyType="string"
                    maxLenght={9}
                />

                <BoxContainer>
                    <BoxInput
                        textLabel="Estado"
                        placeholder="Estado..."
                        KeyType="string"
                        maxLenght={6}
                    />
                    <BoxInput
                        textLabel="Uf"
                        placeholder="Uf"
                        KeyType="string"
                        maxLenght={3}
                    />
                </BoxContainer>

            </ContainerHome>
        </ScrollViewHome>
    )

}