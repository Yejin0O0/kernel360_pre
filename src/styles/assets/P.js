import { styled } from "styled-components";

const P = styled.p`
    width: 100%;
    height: fit-content;
    margin: 0;
    padding: 0;
    font-size: ${(props) => props.theme.fontSize[props.$fsize || "md"]};
    font-weight: ${(props) => props.$fweight || "500"};
    word-wrap: break-word;
    color: ${(props) => props.theme.color[props.color || "bk"]};
    white-space: ${(props) => props.$whitespace || "nowrap"};
    overflow: hidden;
    text-overflow: ellipsis;
    ${(props) => props.$center && "text-align: center"};
    ${(props) => props.$underline && "text-decoration-line: underline"};
    ${(props) => props.$line && "text-decoration-line: line-through"};
    line-height: ${(props) => props.$lineheight || "normal"};
    letter-spacing: ${(props) => props.$letterspacing || "normal"};
`;

export default P;
