import styled from "styled-components";
import { theme } from "../../styles/GlobalStyle";

export const Wrapper = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    border: thin solid ${theme.colors.primary};
`;

export const Input = styled.input`
    flex: 1;
    background-color: ${theme.colors.secondary};
`;

export const Button = styled.h1`
    color: white;
    background-color: ${theme.colors.primary};
    margin: 0;
    padding: 1.5rem;
`;
