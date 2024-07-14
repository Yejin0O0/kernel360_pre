import React from "react";
import styled from "styled-components";
import { Div, FlexDiv } from "../../styles/assets/Div";
import { H1 } from "../../styles/assets/H";
import Img from "../../styles/assets/Img";
import P from "../../styles/assets/P";
import LongSquareBtn from "../Common/LongSquareBtn";

const CirclePatternContainer = styled(FlexDiv)`
    background-color: #54a6ff;
    background-image: radial-gradient(circle at left 30% bottom 10%, #54a6ff 10%, transparent 10.5%),
        radial-gradient(circle at left 30% bottom 10%, rgba(255, 255, 255, 0.06) 20%, transparent 20.5%),
        radial-gradient(circle at left 30% bottom 10%, #54a6ff 30%, transparent 30%),
        radial-gradient(circle at left 30% bottom 10%, rgba(255, 255, 255, 0.06) 40%, transparent 40.5%),
        radial-gradient(circle at left 30% bottom 10%, #54a6ff 50%, transparent 50%),
        radial-gradient(circle at left 30% bottom 10%, rgba(255, 255, 255, 0.06) 60%, transparent 60.5%),
        radial-gradient(circle at left 30% bottom 10%, #54a6ff 70%, transparent 70%),
        radial-gradient(circle at left 30% bottom 10%, rgba(255, 255, 255, 0.06) 80%, transparent 80.5%),
        radial-gradient(circle at left 30% bottom 10%, #54a6ff 90%, transparent 90%),
        radial-gradient(circle at left 30% bottom 10%, rgba(255, 255, 255, 0.06) 100%, transparent 100.5%);
`;

const HerringContainer = styled(FlexDiv)`
    background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='80' height='40' patternTransform='scale(4) rotate(90)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(225, 80%, 56%, 1)'/><path d='M20 0L0 10v10l20-10 20 10V10zm20 20v10l20-10 20 10V20L60 10z'  stroke-width='1' stroke='none' fill='hsla(226, 57%, 43%, 0.18)'/><path d='M40 0v10L60 0l20 10V0L60-10zM20 20L0 30v10l20-10 20 10V30zm20 20v10l20-10 20 10V40L60 30z'  stroke-width='1' stroke='none' fill='hsla(226, 57%, 43%, 0.18)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
`;

const Advertisement = (props) => {
    const { pattern, image } = props;

    return (
        <>
            {pattern === "circle" ? (
                <CirclePatternContainer
                    width="640px"
                    height="400px"
                    $justifycontent="start"
                    $position="relative"
                    $radius="10"
                    $overflow="hidden"
                    $padding="20px"
                >
                    <FlexDiv $direction="column" width="100%" height="360px" $justifycontent="start">
                        <Div width="100%">
                            <Div width="100%">
                                <H1 color="wh" $fweight="600" $fsize="xl" $lineheight="48px">
                                    The Best Platform
                                </H1>
                            </Div>
                            <Div width="100%">
                                <H1 color="wh" $fweight="600" $fsize="xl" $lineheight="48px">
                                    for Car Rental
                                </H1>
                            </Div>
                        </Div>
                        <Div width="100%" $margin="20px 0">
                            <Div width="100%">
                                <P color="wh" $lineheight="24px">
                                    Ease of doing a car rental safely and
                                </P>
                            </Div>
                            <Div width="100%">
                                <P color="wh" $lineheight="24px">
                                    reliably. Of course at a low price.
                                </P>
                            </Div>
                        </Div>
                        <FlexDiv width="100%" $justifycontent="start">
                            <LongSquareBtn text="Rental Car" move="rentmore" />
                        </FlexDiv>

                        <FlexDiv height="275px" $position="absolute" $bottom="-45px">
                            <Img src={image} />
                        </FlexDiv>
                    </FlexDiv>
                </CirclePatternContainer>
            ) : (
                <HerringContainer
                    width="640px"
                    height="400px"
                    $justifycontent="start"
                    $position="relative"
                    $radius="10"
                    $overflow="hidden"
                    $padding="20px"
                >
                    <FlexDiv $direction="column" width="100%" height="360px" $justifycontent="start">
                        <Div width="100%">
                            <Div width="100%">
                                <H1 color="wh" $fweight="600" $fsize="xl" $lineheight="48px">
                                    Easy way to rent a
                                </H1>
                            </Div>
                            <Div width="100%">
                                <H1 color="wh" $fweight="600" $fsize="xl" $lineheight="48px">
                                    car at a low price
                                </H1>
                            </Div>
                        </Div>
                        <Div width="100%" $margin="20px 0">
                            <Div width="100%">
                                <P color="wh" $lineheight="24px">
                                    EProviding cheap car rental services
                                </P>
                            </Div>
                            <Div width="100%">
                                <P color="wh" $lineheight="24px">
                                    and safe and comfortable facilities.
                                </P>
                            </Div>
                        </Div>
                        <FlexDiv width="100%" $justifycontent="start">
                            <LongSquareBtn text="Rental Car" back="information" move="rentmore" />
                        </FlexDiv>

                        <FlexDiv height="275px" $position="absolute" $bottom="-45px">
                            <Img src={image} />
                        </FlexDiv>
                    </FlexDiv>
                </HerringContainer>
            )}
        </>
    );
};

export default Advertisement;
