import styled, { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
}
a{
    text-decoration: none;
}
`;

export const PageWrapper = styled.div`
    padding: 15px 20px;
`;

export const PageWrapperMenu = styled.div`
    padding: 15px 15px 71px;
`;

export const LogoWrapper = styled.div`
    text-align: center;
`;

export const TopLink = styled.div`
    text-align: right;
`;
