import styled from "styled-components";
import { theme } from "../../styles/GlobalStyle";
import TextHelper from "../helpers/TextHelper";
import WrapperHelper from "../helpers/WrapperHelper";

export const Container = styled(WrapperHelper)`
    display: flex;
    align-items: center;
    min-height: 5rem;
    padding: 1.5rem;
    gap: 1rem;
    background-color: ${theme.colors.secondary};

    & > *:last-child {
        margin-left: auto;
    }
`;

export const Wrapper = styled(WrapperHelper)`
    display: flex;
    flex-direction: column;
`
export const Text = styled(TextHelper)`
    margin: 0;
`
