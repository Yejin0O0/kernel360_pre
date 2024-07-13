import Appointment from "../Components/Appointment";
import { Div, FlexDiv } from "../styles/assets/Div";
import Img from "../styles/assets/Img";

const AppointmentContainer = () => {
    return (
        <FlexDiv width="100%" $justifycontent="space-evenly">
            <Appointment pick />
            <FlexDiv $backcolor="primary" width="60px" height="60px" $radius="15" $pointer>
                <Div width="24px" height="24px">
                    <Img src="icons/arrow-up-down.svg" />
                </Div>
            </FlexDiv>
            <Appointment />
        </FlexDiv>
    );
};

export default AppointmentContainer;
