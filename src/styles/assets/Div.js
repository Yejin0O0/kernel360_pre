import styled from "styled-components";

const Div = styled.div`
    width: ${(props) => props.width || "fit-content"};
    height: ${(props) => props.height || "fit-content"};
    margin: ${(props) => props.$margin || "0px"};
    padding: ${(props) => props.$padding || "0px"};
    background-color: ${(props) => props.theme.color[props.$backgroundColor || "transparent"]};
    z-index: ${(props) => props.$zIndex || "auto"};
    border: ${(props) => props.$border || "none"};
    border-color: ${(props) => props.theme.color[props.$borderColor || "transparent"]};
    border-top: ${(props) => props.$borderT || ""};
    border-bottom: ${(props) => props.$borderB || ""};
    border-right: ${(props) => props.$borderR || ""};
    border-left: ${(props) => props.$borderL || ""};
    border-radius: ${(props) => `${props.radius}px` || "none"};
    border-collapse: collapse;
    display: ${(props) => props.display || "block"};
    ${(props) => props.$pointer && "cursor:pointer;"};
    min-height: ${(props) => props.$minHeight || ""};
    max-height: ${(props) => props.$maxHeight || ""};
    min-width: ${(props) => props.$minWidth || ""};
    max-width: ${(props) => props.$maxWidth || ""};
    overflow: ${(props) => props.overflow || "visible"};
    position: ${(props) => props.$position || "static"};
    top: ${(props) => props.$top || ""};
    bottom: ${(props) => props.$bottom || ""};
    left: ${(props) => props.$left || ""};
    right: ${(props) => props.$right || ""};
    vertical-align: ${(props) => props.$verticalAlign || ""};
    white-space: ${(props) => props.$whiteSpace || "nowrap"};
`;

const FlexDiv = styled(Div)`
    display: flex;
    align-items: ${(props) => props.$alignitems || "center"};
    justify-content: ${(props) => props.$justifycontent || "center"};
    flex-direction: ${(props) => props.direction || "row"};
    flex-wrap: ${(props) => props.wrap || "wrap"};
`;

export { Div, FlexDiv };
