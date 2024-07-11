import styled from "styled-components";

const Div = styled.div`
    width: ${(props) => props.width || "fit-content"};
    height: ${(props) => props.height || "fit-content"};
    margin: ${(props) => props.$margin || "0px"};
    padding: ${(props) => props.$padding || "0px"};
    background-color: ${(props) => props.theme.color[props.$backcolor || "transparent"]};
    z-index: ${(props) => props.$zindex || "auto"};
    border: ${(props) => props.$border || "none"};
    border-color: ${(props) => props.theme.color[props.$bordercolor || "transparent"]};
    border-top: ${(props) => props.$bordert || ""};
    border-bottom: ${(props) => props.$borderb || ""};
    border-right: ${(props) => props.$borderr || ""};
    border-left: ${(props) => props.$borderl || ""};
    border-radius: ${(props) => `${props.$radius}px` || "none"};
    border-collapse: collapse;
    display: ${(props) => props.$display || "block"};
    ${(props) => props.$pointer && "cursor:pointer;"};
    min-height: ${(props) => props.$minheight || ""};
    max-height: ${(props) => props.$maxheight || ""};
    min-width: ${(props) => props.$minwidth || ""};
    max-width: ${(props) => props.$maxwidth || ""};
    overflow: ${(props) => props.$overflow || "visible"};
    position: ${(props) => props.$position || "static"};
    top: ${(props) => props.$top || ""};
    bottom: ${(props) => props.$bottom || ""};
    left: ${(props) => props.$left || ""};
    right: ${(props) => props.$right || ""};
    vertical-align: ${(props) => props.$verticalalign || ""};
    white-space: ${(props) => props.$whitespace || "nowrap"};
    box-sizing: border-box;
`;

const FlexDiv = styled(Div)`
    display: flex;
    align-items: ${(props) => props.$alignitems || "center"};
    justify-content: ${(props) => props.$justifycontent || "center"};
    flex-direction: ${(props) => props.$direction || "row"};
    flex-wrap: ${(props) => props.$wrap || "wrap"};
`;

export { Div, FlexDiv };
