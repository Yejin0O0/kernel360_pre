import styled from "styled-components";

import Logo from "../Components/Logo";
import { Div, FlexDiv } from "../styles/assets/Div";
import P from "../styles/assets/P";

const Hr = styled.hr`
    background: #131313;
    opacity: 16%;
    width: 100%;
    height: 1px;
    border: 0;
`;

const BottomContainer = () => {
    return (
        <FlexDiv width="100%" $margin="80px 0" $backcolor="wh" $padding="80px 0">
            <FlexDiv width="100%" $justifycontent="space-between">
                <Div width="49%" $padding="0 50px">
                    <Logo />
                </Div>
                <FlexDiv width="49%" $justifycontent="space-evenly">
                    <Div $margin="0 0 40px 0" width="152px">
                        <P $lineheight="30px" $fweight="600" $fsize="lg">
                            About
                        </P>
                    </Div>
                    <Div $margin="0 0 40px 0" width="152px">
                        <P $lineheight="30px" $fweight="600" $fsize="lg">
                            Community
                        </P>
                    </Div>
                    <Div $margin="0 0 40px 0" width="152px">
                        <P $lineheight="30px" $fweight="600" $fsize="lg">
                            Socials
                        </P>
                    </Div>
                </FlexDiv>
            </FlexDiv>
            <FlexDiv width="100%" $justifycontent="space-between" $alignitems="start">
                <Div width="49%" $padding="0 50px">
                    <Div $margin="30px 0">
                        <P color="secondary" $lineheight="24px">
                            Our vision is to provide convenience <br /> and help increase your sales business.
                        </P>
                    </Div>
                </Div>
                <FlexDiv width="49%" $justifycontent="space-evenly">
                    <Div width="152px">
                        <Div $margin="0 0 20px 0">
                            <P $lineheight="24px" color="secondary">
                                How it works
                            </P>
                        </Div>
                        <Div $margin="0 0 20px 0">
                            <P $lineheight="24px" color="secondary">
                                Featured
                            </P>
                        </Div>
                        <Div $margin="0 0 20px 0">
                            <P $lineheight="24px" color="secondary">
                                Featured
                            </P>
                        </Div>
                        <Div $margin="0 0 20px 0">
                            <P $lineheight="24px" color="secondary">
                                Bussiness Relation
                            </P>
                        </Div>
                    </Div>

                    <Div width="152px">
                        <Div $margin="0 0 20px 0">
                            <P $lineheight="24px" color="secondary">
                                Events
                            </P>
                        </Div>
                        <Div $margin="0 0 20px 0">
                            <P $lineheight="24px" color="secondary">
                                Blog
                            </P>
                        </Div>
                        <Div $margin="0 0 20px 0">
                            <P $lineheight="24px" color="secondary">
                                Podcast
                            </P>
                        </Div>
                        <Div $margin="0 0 20px 0">
                            <P $lineheight="24px" color="secondary">
                                Invite a friend
                            </P>
                        </Div>
                    </Div>

                    <Div width="152px">
                        <Div $margin="0 0 20px 0">
                            <P $lineheight="24px" color="secondary">
                                Events
                            </P>
                        </Div>
                        <Div $margin="0 0 20px 0">
                            <P $lineheight="24px" color="secondary">
                                Blog
                            </P>
                        </Div>
                        <Div $margin="0 0 20px 0">
                            <P $lineheight="24px" color="secondary">
                                Podcast
                            </P>
                        </Div>
                        <Div $margin="0 0 20px 0">
                            <P $lineheight="24px" color="secondary">
                                Invite a friend
                            </P>
                        </Div>
                    </Div>
                </FlexDiv>
            </FlexDiv>

            <Div width="100%" $padding="50px">
                <Hr />

                <FlexDiv width="100%" $padding="30px 0" $justifycontent="space-between">
                    <Div width="49%">
                        <P $fweight="600" $lineheight="24px">
                            ©2024 KernelRent. All rights reserved
                        </P>
                    </Div>
                    <FlexDiv width="20%" $justifycontent="space-between">
                        <Div $pointer>
                            <P $fweight="600" $lineheight="24px">
                                Privacy & Policy
                            </P>
                        </Div>
                        <Div $pointer>
                            <P $fweight="600" $lineheight="24px">
                                Terms & Condition
                            </P>
                        </Div>
                    </FlexDiv>
                </FlexDiv>
            </Div>
        </FlexDiv>
    );
};

export default BottomContainer;
