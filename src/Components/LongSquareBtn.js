import { Div, FlexDiv } from "../styles/assets/Div";
import P from "../styles/assets/P";

const LongSquareBtn = (props) => {
    const { btnWidth, text } = props;
    return (
        <FlexDiv width={btnWidth} height="44px" $backcolor="primary" $padding="0px 20px" radius={4}>
            <Div>
                <P color="wh">{text}</P>
            </Div>
        </FlexDiv>
    );
};

export default LongSquareBtn;
