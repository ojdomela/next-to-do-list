import { createGlobalStyle } from "styled-components";

export const theme = {
    colors: {
        primary: "#FFAC61",
        secondary: "#FCD7B6",
        background: "#131a22",
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
        min-height: 100vh;
        color: black;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`;