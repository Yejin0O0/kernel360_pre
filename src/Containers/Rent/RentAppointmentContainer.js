import Appointment from "../../Components/Rent/RentAppointment";
import { Div, FlexDiv } from "../../styles/assets/Div";
import Img from "../../styles/assets/Img";

const RentAppointmentContainer = () => {
    return (
        <FlexDiv width="100%" $justifycontent="space-between">
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

export default RentAppointmentContainer;
