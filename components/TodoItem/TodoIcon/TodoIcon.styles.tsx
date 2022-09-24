import styled from "styled-components";
import { theme } from "../../../styles/GlobalStyle";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    border: thin solid ${theme.colors.primary};
    width: 300px;
    min-height: 500px;
`;
