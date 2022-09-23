import styled from "styled-components";
import { theme } from "../../styles/GlobalStyle";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${theme.colors.secondary};
    height: 5rem;
    padding: 1.5rem;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
`;
