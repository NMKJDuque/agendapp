import styled from "styled-components";
import { Theme1 } from "./../../themes/theme1";
export const TopbarContainer = styled.div`
    //border: 1px solid black;
    display: flex;
    align-items: center;
    padding: 10px 20px;
`;

export const TopbarTitle = styled.div`
    flex: 1;
    text-align: center;
    h4{
        font-size: 1.3em;
    }
`;

export const BackButtonTopbar = styled.div`
    svg{
        font-size: 1.5em;
        color: #888;
        cursor: pointer;
        &:hover{
            color: ${Theme1.primary};
        }
    }

`;
