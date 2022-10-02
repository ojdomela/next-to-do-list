import styled from "styled-components";
import { theme } from "../../styles";
import WrapperHelper from "../helpers/WrapperHelper";

export const Wrapper = styled(WrapperHelper)`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    border: thin solid ${theme.colors.primary};
    background-color: white;
    min-height: 475px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;