import styled from "styled-components";
import { theme } from "../../styles/GlobalStyle";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: black;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border: thin solid ${theme.colors.primary};
    width: 300px;
    min-height: 500px;
`;

export const Header = styled.h1`
    color: white;
    background-color: ${theme.colors.primary};
    margin: 0;
    padding: 1.5rem;
`;
