import styled from "styled-components";

const Button = styled.button`
    width: ${(props) => props.width || "fit-content"};
    height: ${(props) => props.height || "fit-content"};
    margin: ${(props) => props.$margin || "0px"};
    padding: ${(props) => props.$padding || "0px"};
    background-color: ${(props) => props.theme.color[props.backgroundColor] || "transparent"};
    border: ${(props) => props.border || "none"};
    border-radius: ${(props) => `${props.radius}px` || "0"};
    cursor: pointer;
`;

// &:hover {
//     background-color: ${(props) => props.theme.color[props.$HBackgroundColor || "transparent"]};
// }

export default Button;
