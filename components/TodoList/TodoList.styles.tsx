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
    justify-content: space-between;
    border: thin solid ${theme.colors.primary};
    width: 300px;
    min-height: 500px;
`;

export const Header = styled.header`
    background-color: ${theme.colors.primary};
    color: white;
    height: 10rem;
`;

export const Title = styled.h1`
    margin: 0;
    height: 5rem;
    padding: 1.5rem;
`;
