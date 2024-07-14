import styled from "styled-components";

import Logo from "../../Components/Common/Logo";
import { Div, FlexDiv } from "../../styles/assets/Div";
import Img from "../../styles/assets/Img";
import { Input } from "../../styles/assets/Input";

const BellNotification = styled.div`
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    right: 7px;
    transform: translate(50%, -50%);
`;

const HeaderContainer = () => {
    return (
        <FlexDiv
            width="calc(100vw - (100vw - 100%));"
            height="124px"
            $justifycontent="space-between"
            $padding="0 50px"
            $backcolor="wh"
        >
            <FlexDiv>
                <Logo />
                <FlexDiv
                    width="492px"
                    height="44px"
                    $border="1px solid"
                    $bordercolor="secondary"
                    $justifycontent="space-between"
                    $radius="70"
                    $padding="0 20px"
                    $margin="0 0 0 50px"
                >
                    <FlexDiv>
                        <Div width="24px" height="24px">
                            <Img src="/icons/search.svg" />
                        </Div>
                        <Input placeholder="Search something here" />
                    </FlexDiv>
                    <FlexDiv>
                        <Div width="24px" height="24px">
                            <Img src="/icons/setting2.svg" />
                        </Div>
                    </FlexDiv>
                </FlexDiv>
            </FlexDiv>

            <FlexDiv>
                <FlexDiv
                    width="44px"
                    height="44px"
                    $radius="99"
                    $border="1px solid"
                    $bordercolor="lightGrey"
                    $pointer
                    $margin="0 10px"
                >
                    <Div width="24px" height="24px">
                        <Img src="/icons/heart_dark.svg" />
                    </Div>
                </FlexDiv>
                <FlexDiv
                    width="44px"
                    height="44px"
                    $radius="99"
                    $border="1px solid"
                    $bordercolor="lightGrey"
                    $pointer
                    $margin="0 10px"
                    $position="relative"
                >
                    <Div width="24px" height="24px">
                        <Img src="/icons/bell.svg" />
                        <BellNotification />
                    </Div>
                </FlexDiv>
                <FlexDiv
                    width="44px"
                    height="44px"
                    $radius="99"
                    $border="1px solid"
                    $bordercolor="lightGrey"
                    $pointer
                    $margin="0 10px"
                >
                    <Div width="24px" height="24px">
                        <Img src="/icons/setting.svg" />
                    </Div>
                </FlexDiv>

                <Div width="44px" height="44px" $radius="99" $overflow="hidden" $pointer $margin="0 10px">
                    <Img src="/images/profile.jpeg" />
                </Div>
            </FlexDiv>
        </FlexDiv>
    );
};

export default HeaderContainer;
