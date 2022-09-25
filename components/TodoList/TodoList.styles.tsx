import styled from "styled-components";
import { theme } from "../../styles";
import WrapperHelper from "../helpers/WrapperHelper";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: ${theme.colors.background};
`;

export const Wrapper = styled(WrapperHelper)`
    display: flex;
    flex-direction: ${props => props.flexDirection ?? "column"};
    align-items: ${props => props.alignItems ?? "stretch"};
    justify-content: ${props => props.justifyContent ?? "flex-start"};
    border: thin solid ${theme.colors.primary};
    ${props => props.minHeight && `min-height: ${props.minHeight};`}
`;

export const Header = styled.header`
    background-color: ${theme.colors.primary};
`;

export const Title = styled.h1`
    margin: 0;
    padding: 1.5rem;
`;

export const Text = styled.p`
    margin: 0;
    padding: 1.5rem;
    font-size: 1.5rem;
`;
