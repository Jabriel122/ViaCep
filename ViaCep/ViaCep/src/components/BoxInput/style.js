import styled from "styled-components";

//
export const FieldContent = styled.View`

    /* define o valo da largura como o valor da prop.fieldWidth */
    width: ${props => `${props.fieldWidth}%`};
    margin-bottom: 20px;
`