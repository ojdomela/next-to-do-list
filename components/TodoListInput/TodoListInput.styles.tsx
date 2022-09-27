import styled from "styled-components";
import { theme } from "../../styles";

export const Form = styled.form`
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
    border: thin solid ${theme.colors.primary};
`;

export const Input = styled.input`
    flex: 1;
    color: black;
    border: 0;
    background-color: ${theme.colors.secondary};
`;

export const Button = styled.button`
    background-color: ${theme.colors.primary};
    margin: 0;
    border: 0;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1.5rem;
`;
