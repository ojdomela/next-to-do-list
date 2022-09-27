import styled from "styled-components";
import { theme } from "../../styles";
import WrapperHelper from "../helpers/WrapperHelper";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 28rem;
    justify-content: center;
    border-radius: 0.5rem;
    border: 1px solid ${theme.colors.primary};
    background-color: ${theme.colors.secondary};
`;

export const Header = styled.header`
    background-color: ${theme.colors.primary};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Wrapper = styled(WrapperHelper)`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    border: thin solid ${theme.colors.primary};
    background-color: white;
    min-height: 500px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
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
