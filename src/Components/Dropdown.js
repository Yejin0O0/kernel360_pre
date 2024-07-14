import { useState } from "react";
import styled from "styled-components";
import { Div, FlexDiv } from "../styles/assets/Div";
import Img from "../styles/assets/Img";
import P from "../styles/assets/P";

const DropDownList = styled("ul")`
    width: 100%;
    height: 200px;
    overflow: auto;
    padding: 0;
    margin: 0;
    background: ${(props) => props.theme.color.wh};
    box-sizing: border-box;
    box-shadow: 0px 20px 50px 0 rgba(0, 0, 0, 0.2);

    font-size: ${(props) => props.theme.fontSize.sm};
    font-weight: 500;
    &:first-child {
        padding-top: 0.8em;
    }
`;

const ListItem = styled("li")`
    list-style: none;
    margin-bottom: 0.8em;
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
        background: ${(props) => props.theme.color.primary};
        color: ${(props) => props.theme.color.wh};
    }
`;

/*
    label: 선택되기 전 렌더링되는 문구
*/
const Dropdown = (props) => {
    const { label, options } = props;
    const [isOpen, setIsOpen] = useState(false);

    const [selectedOption, setSelectedOption] = useState("");

    const toggling = () => {
        setIsOpen(!isOpen);
    };

    const onOptionClicked = (option) => () => {
        setSelectedOption(option);

        setIsOpen(false);
    };

    return (
        <Div width="100%" $position="relative">
            <FlexDiv width="130px" height="20px" $pointer $justifycontent="space-between" onClick={() => toggling()}>
                <Div>
                    <P $fsize="xs" color="secondary">
                        {selectedOption || label}
                    </P>
                </Div>
                <Div width="14px" $margin="0 0 0 20px">
                    <Img src="/icons/chevron-down.svg" />
                </Div>
            </FlexDiv>
            {isOpen && (
                <FlexDiv $zIndex={3} width="100%" $position="absolute">
                    <DropDownList>
                        {options.map((option, idx) => (
                            <ListItem key={option + idx} onClick={onOptionClicked(option)}>
                                {option}
                            </ListItem>
                        ))}
                    </DropDownList>
                </FlexDiv>
            )}
        </Div>
    );
};

export default Dropdown;
