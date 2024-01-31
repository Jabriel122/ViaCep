import { ScrollView } from "react-native";
import { ScrollViewHome, ContainerHome, BoxInput, LabelBox, TextLabel, TextInputHome, BoxContainer } from "./styles"
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
                <BoxInput>
                    <LabelBox>
                        <TextLabel>
                            Informar CEP:
                        </TextLabel>
                    </LabelBox>
                    <TextInputHome />
                </BoxInput>
                <BoxInput>
                    <LabelBox>
                        <TextLabel>
                            Logradouro:
                        </TextLabel>
                    </LabelBox>
                    <TextInputHome />
                </BoxInput>
                <BoxInput>
                    <LabelBox>
                        <TextLabel>
                            Bairro:
                        </TextLabel>
                    </LabelBox>
                    <TextInputHome />
                </BoxInput>
                <BoxInput>
                    <LabelBox>
                        <TextLabel>
                            Cidade:
                        </TextLabel>
                    </LabelBox>
                    <TextInputHome />
                </BoxInput>

                <BoxContainer>
                    <BoxInput>
                        <LabelBox>
                            <TextLabel>
                                Estado:
                            </TextLabel>
                        </LabelBox>
                        <TextInputHome />
                    </BoxInput>
                    <BoxInput>
                        <LabelBox>
                            <TextLabel>
                                UF:
                            </TextLabel>
                        </LabelBox>
                        <TextInputHome />
                    </BoxInput>
                </BoxContainer>


            </ContainerHome>
        </ScrollViewHome>
    )

}