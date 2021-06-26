import styled from "styled-components";

export const TarjetaWrapper = styled.div`
    border: 1px solid #CCC;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    //align-items: center;
    padding: 10px 10px;
    margin: 10px;
    border-radius: 10px;
    flex: 1;
    cursor: pointer;

    &:hover{
        svg, p{
            color: #0066FF;
        }
    }
    a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }
`;

export const TarjetaTitle = styled.h4`
    //justify-content: left;
    //text-align: left;
`;

export const IconWrapper = styled.div`
    display: flex;
`;

export const LabelIcon = styled.label`
    margin: 0 5px;
`;
