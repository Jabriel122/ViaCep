import styled from "styled-components";

//ScrollViewHome - ScrollView
//ContainerHome - View
//BoxInput - View
//LabeyBox - View
//TextLabel - Text
//TextInputHome - TextInput
//BoxContainer - View

export const ScrollViewHome = styled.ScrollView`
    height: 20%;
`
export const ContainerHome = styled.View`
    width: '80%';
    padding: 35px;
    border-color: blue;
    border-width: 3px;
`
export const BoxInput = styled.View`
     border-Color: 'red';
    border-Width: 2;
    width: '80%';
`

export const LabelBox = styled.View`
    background-color: aqua;
    width: '80%';
`

export const TextLabel = styled.Text`
    color: blue;
`
export const TextInputHome = styled.TextInput`
    width: 20%;
`
export const BoxContainer = styled.View`
    flex-direction: row;
`
