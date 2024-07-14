import { FlexDiv } from "../styles/assets/Div";
import P from "../styles/assets/P";

const LongSquareBtn = (props) => {
    const { btnWidth, text, back } = props;
    return (
        <FlexDiv
            width={btnWidth}
            height="44px"
            $backcolor={back ? back : "primary"}
            $padding="0px 20px"
            $radius={4}
            $pointer
        >
            <P $fweight="600" $lineheight="24px" color="wh">
                {text}
            </P>
        </FlexDiv>
    );
};

export default LongSquareBtn;
