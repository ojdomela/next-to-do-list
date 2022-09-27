import styled from "styled-components";
import { theme } from "../../styles";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${theme.colors.primary};
    height: 5rem;
    
    > * {
        margin: 1.5rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;

        > * {
            margin: 0 0 1.5rem 0;
        }
    }
`;
