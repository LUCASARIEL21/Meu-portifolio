import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        max-width: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
        overflow-y: auto;
        scrollbar-width: none;
        &::-webkit-scrollbar{
            display: none;
        }
    }

    body{
        background-color: #4158D0;
        background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    }
`;

export default GlobalStyle;