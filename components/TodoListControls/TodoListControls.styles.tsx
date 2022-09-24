import styled from "styled-components";
import { theme } from "../../styles/GlobalStyle";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${theme.colors.primary};
    height: 5rem;
    padding: 1.5rem;
`;
