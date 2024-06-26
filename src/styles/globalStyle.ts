import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 @import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");

 :root {
    font-family: "VT323", monospace;
    line-height: 1.5;
    font-weight: 400;
    margin: 0px;
    padding: 0px;
    user-select: none;
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #46425e;
    background-image: url("src/assets/background.png");
    background-size: cover;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
 }

 body {
    font-family: "VT323", monospace;
    margin: 0px;
    padding: 0px;
    height: 100%;
 }
`;
