import AppointmentContainer from "../Containers/AppointmentContainer";
import BottomContainer from "../Containers/BottomContainer";
import HeaderContainer from "../Containers/HeaderContainer";
import { Div } from "../styles/assets/Div";

const RentPage = () => {
    return (
        <Div $backcolor="background" width="100%">
            <HeaderContainer />
            <AppointmentContainer />
            <BottomContainer />
        </Div>
    );
};

export default RentPage;
