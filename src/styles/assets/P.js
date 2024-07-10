import { styled } from "styled-components";

const P = styled.p`
    width: 100%;
    height: fit-content;
    margin: 0;
    padding: 0;
    font-size: ${(props) => props.theme.fontSize[props.fontSize || "md"]};
    font-weight: ${(props) => props.fontWeight || "500"};
    word-wrap: break-word;
    color: ${(props) => props.theme.color[props.color || "bk"]};
    white-space: ${(props) => props.$whiteSpace || "nowrap"};
    overflow: hidden;
    text-overflow: ellipsis;
    ${(props) => props.$center && "text-align: center"};
    ${(props) => props.$underline && "text-decoration-line: underline"};
    line-height: ${(props) => props.$lineHeight || "normal"};
    letter-spacing: ${(props) => props.$letterSpacing || "normal"};
`;

export default P;
