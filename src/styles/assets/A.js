import styled from "styled-components";

const A = styled.a`
    width: 100%;
    height: fit-content;
    margin: 0;
    padding: 0;
    font-size: ${(props) => props.theme.fontSize[props.$fsize || "md"]};
    font-weight: ${(props) => props.$fweight || "500"};
    word-wrap: break-word;
    color: ${(props) => props.theme.color[props.$color || "bk"]};
    overflow: hidden;
    text-overflow: ellipsis;
    ${(props) => props.c$enter && "text-align: center"};
    text-decoration-line: ${(props) => props.$underline || "none"};
    &:hover {
        color: ${(props) => props.theme.color[props.$hoverColor || "bk"]};
    }
`;

export default A;
