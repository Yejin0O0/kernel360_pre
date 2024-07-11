import { styled } from "styled-components";

const Input = styled.input`
    width: ${(props) => props.width || ""};
    height: ${(props) => props.height || ""};
    margin: ${(props) => props.$margin || "0px"};
    padding: ${(props) => props.$padding || "5px 10px"};
    font-size: ${(props) => props.theme.fontSize[props.fontSize || "md"]};
    display: ${(props) => props.display || "inline-block"};
    text-indent: ${(props) => props.textIndent || 0};
    border: none;
    &:focus {
        outline: none;
    }
    ::-webkit-input-placeholder {
        color: ${(props) => props.theme.color.secondary};
        font-size: 14px;
    }
`;

const Label = styled.label`
    font-size: ${(props) => props.fontSize || "14px"};
    width: ${(props) => props.width || ""};
    height: ${(props) => props.height || ""};
    margin: ${(props) => props.$margin || ""};
    padding: ${(props) => props.$padding || ""};
    color: ${(props) => props.theme.color[props.color || "bk"]};

    :hover {
        cursor: pointer;
    }
`;

export { Input, Label };
