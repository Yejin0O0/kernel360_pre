import { styled } from "styled-components";

const Input = styled.input`
    width: ${(props) => props.width || ""};
    height: ${(props) => props.height || ""};
    margin: ${(props) => props.$margin || "0px"};
    padding: ${(props) => props.$padding || "5px 10px"};
    background-color: ${(props) => props.theme.color || "inherit"};
    font-size: ${(props) => props.theme.fontSize[props.fontSize || "md"]};
    color: ${(props) => props.theme.color || props.theme.color};
    border: ${(props) => `${props.$border}` || "none"};
    border-color: ${(props) => props.theme.color[props.color || "border"]};
    border-radius: ${(props) => `${props.$borderRadius}px` || "none"};
    display: ${(props) => props.display || "inline-block"};
    text-indent: ${(props) => props.textIndent || 0};
    &:focus {
        outline: none;
    }
`;

const TextInput = styled(Input).attrs({ type: "text" })`
    border: 1px solid ${(props) => props.theme.color.grey1};
    border-radius: ${(props) => `${props.$borderRadius}px` || "2px"};
    ::-webkit-input-placeholder {
        color: ${(props) => props.theme.color.textColor};
        font-size: 10px;
    }
    box-sizing: border-box;
    padding: ${(props) => props.$padding || "13px 10px"};
    height: ${(props) => props.height || "40px"};
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

export { Input, Label, TextInput };
