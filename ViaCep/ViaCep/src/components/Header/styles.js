import styled from "styled-components";

///HeaderContainer - View
//HeaderContent - SafeAreaView
//TextHeader - Text

export const HeaderContainer = styled.View`
    /* border-color: black;
    border-width: 2; */
    width: 100%;
    flex: 1;
    background-color: #FECC2B;
    justify-content: center;
    align-items: center;
    text-align: center;

    border-radius: 0px 0px 15px 15px;
    box-shadow: 0px 0px 10px  black;
    shadow-color: black;
    shadow-offser: 0px 4px;
    shadow-opacity: 0.15;
    shadow-radius:15px;
    elevation: 5;
`

export const HeaderContent = styled.SafeAreaView`
margin-top: 45px;
`

export const TextHeader = styled.Text`
    font-family: 'Roboto_500Medium';
    color: #333E33 ;
    font-size: 24px;

`
