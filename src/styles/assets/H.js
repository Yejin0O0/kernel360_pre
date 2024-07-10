import { styled } from "styled-components";

const H1 = styled.h1`
    width: 100%;
    height: fit-content;
    margin: 0;
    padding: 0;
    font-size: ${(props) => props.theme.fontSize[props.fsize || "md"]};
    font-weight: ${(props) => props.fweight || "700"};
    color: ${(props) => props.theme.color[props.color || "bk"]};
    line-height: ${(props) => props.$lineheight || "normal"};
    letter-spacing: ${(props) => props.$letterspacing || "normal"};
`;

const H2 = styled.h2`
    width: 100%;
    height: fit-content;
    margin: 0;
    padding: 0;
    font-size: ${(props) => props.theme.fontSize[props.fsize || "md"]};
    font-weight: ${(props) => props.fweight || "500"};
    color: ${(props) => props.theme.color[props.color || "bk"]};
    line-height: ${(props) => props.$lineheight || "normal"};
    letter-spacing: ${(props) => props.$letterspacing || "normal"};
`;

export { H1, H2 };
