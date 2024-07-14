import { useState } from "react";
import { Div, FlexDiv } from "../../styles/assets/Div";
import Img from "../../styles/assets/Img";
import P from "../../styles/assets/P";
import LongSquareBtn from "../Common/LongSquareBtn";

const CarCard = (props) => {
    const { name, type, image, fuelCapacity, gearType, seats, isLiked, originalPrice, salePrice } = props;

    const [like, setLike] = useState(isLiked);
    return (
        <FlexDiv
            $direction="column"
            $justifycontent="space-between"
            $backcolor="wh"
            width="304px"
            height="388px"
            $radius="10"
            $padding="30px"
            $margin="0 0 40px 0"
        >
            <FlexDiv width="100%" $justifycontent="space-between" $alignitems="start">
                <Div>
                    <Div width="100%">
                        <P $fsize="lg" $fweight="700" $lineheight="30px">
                            {name}
                        </P>
                    </Div>
                    <Div width="100%">
                        <P $fsize="sm" $fweight="700" $lineheight="21px" color="secondary">
                            {type}
                        </P>
                    </Div>
                </Div>
                <Div width="24px" height="24px" $pointer onClick={() => setLike(!like)}>
                    <Img src={like ? "/icons/heart_red.svg" : "/icons/heart.svg"} />
                </Div>
            </FlexDiv>
            {/* 자동차사진 */}
            <Div width="100%" height="50%">
                <Img src={image} />
            </Div>

            <FlexDiv width="100%" $justifycontent="space-between">
                <FlexDiv>
                    <Div width="24px" height="24px" $margin="0 5px 0 0">
                        <Img src="/icons/fuel.svg" />
                    </Div>
                    <Div>
                        <P color="secondary" $fsize="sm" $lineheight="21px">
                            {fuelCapacity}
                        </P>
                    </Div>
                </FlexDiv>
                <FlexDiv $margin="0 10px">
                    <Div width="24px" height="24px" $margin="0 5px 0 0">
                        <Img src="/icons/steering.svg" />
                    </Div>
                    <Div>
                        <P color="secondary" $fsize="sm" $lineheight="21px">
                            {gearType}
                        </P>
                    </Div>
                </FlexDiv>
                <FlexDiv>
                    <Div width="24px" height="24px" $margin="0 5px 0 0">
                        <Img src="/icons/people.svg" />
                    </Div>
                    <Div>
                        <P color="secondary" $fsize="sm" $lineheight="21px">
                            {seats}
                        </P>
                    </Div>
                </FlexDiv>
            </FlexDiv>

            <FlexDiv width="100%">
                <Div width="128px">
                    <FlexDiv $alignitems="end">
                        <Div>
                            <P $fsize="lg" $fweight="700" $lineheight="25.2px">
                                ${salePrice ? salePrice.toFixed(2) : originalPrice.toFixed(2)}/
                            </P>
                        </Div>
                        <Div $margin="0 0 0 5px">
                            <P $fsize="sm" $fweight="700" $lineheight="17.64px" color="secondary">
                                day
                            </P>
                        </Div>
                    </FlexDiv>
                    <Div>
                        <P $fsize="sm" $fweight="700" $lineheight="17.64px" color="secondary" $line>
                            {salePrice && `$${originalPrice.toFixed(2)}`}
                        </P>
                    </Div>
                </Div>
                <LongSquareBtn btnWidth="116px" text="Rent Now" move="rentnow" />
            </FlexDiv>
        </FlexDiv>
    );
};

export default CarCard;
