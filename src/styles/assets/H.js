import { styled } from "styled-components";

const H1 = styled.h1`
    width: 100%;
    height: fit-content;
    margin: 0;
    padding: 0;
    font-size: ${(props) => props.theme.fontSize[props.fontSize || "md"]};
    font-weight: ${(props) => props.fontWeight || "700"};
    color: ${(props) => props.theme.color[props.color || "bk"]};
    line-height: ${(props) => props.$lineHeight || "normal"};
    letter-spacing: ${(props) => props.$letterSpacing || "normal"};
`;

const H2 = styled.h2`
    width: 100%;
    height: fit-content;
    margin: 0;
    padding: 0;
    font-size: ${(props) => props.theme.fontSize[props.fontSize || "md"]};
    font-weight: ${(props) => props.fontWeight || "500"};
    color: ${(props) => props.theme.color[props.color || "bk"]};
    line-height: ${(props) => props.$lineHeight || "normal"};
    letter-spacing: ${(props) => props.$letterSpacing || "normal"};
`;

export { H1, H2 };
