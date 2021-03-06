import { createGlobalStyle } from "styled-components";

export const heading = (size) => `
    text-align:center;
    font-weight:bold;
    line-height:1em;
    font-size:${size};
`;
export const GlobalStyles = createGlobalStyle`
    ${({ theme }) => `
        h1 {
            ${heading(theme["font-size-xl"])}
        }
        h2 {
            ${heading(theme["font-size-lg"])}
        }
        h3 {
            ${heading(theme["font-size-md"])}
        }
        h4 {
            ${heading(theme["font-size-sm"])}
        }
    `}
`;
