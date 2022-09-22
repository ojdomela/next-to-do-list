import { createGlobalStyle } from "styled-components";

export const theme = {
    colors: {
        primary: "#0070f3",
    },
};

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
    
    @media (prefers-color-scheme: dark) {
        html {
          color-scheme: dark;
        }
        body {
          color: white;
          background: black;
        }
    }
`;