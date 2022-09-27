import styled from "styled-components";
import { theme } from "../../styles";
import TextHelper from "../helpers/TextHelper";
import WrapperHelper from "../helpers/WrapperHelper";

export const Container = styled(WrapperHelper)`
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
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
    font-size: ${props => props.fontSize ?? "1.8rem"};
    text-decoration: ${props => props.completed ? "line-through" : "none"};
    font-weight: ${props => props.fontWeight ?? "normal"};
`
