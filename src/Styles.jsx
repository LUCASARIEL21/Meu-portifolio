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
`;

export default GlobalStyle;