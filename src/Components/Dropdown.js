import { Div, FlexDiv } from "../styles/assets/Div";
import Img from "../styles/assets/Img";
import P from "../styles/assets/P";

/*
    label: 선택되기 전 렌더링되는 문구
*/
const Dropdown = ({ label }) => {
    return (
        <Div width="100%" $position="relative">
            <FlexDiv width="130px" height="20px" $pointer $justifycontent="space-between">
                <Div>
                    <P $fsize="xs" color="secondary">
                        {label}
                    </P>
                </Div>
                <Div width="14px" $margin="0 0 0 20px">
                    <Img src="/icons/chevron-down.svg" />
                </Div>
            </FlexDiv>
        </Div>
    );
};

export default Dropdown;
