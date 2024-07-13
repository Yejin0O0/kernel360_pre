import AppointmentContainer from "../Containers/AppointmentContainer";
import BottomContainer from "../Containers/BottomContainer";
import HeaderContainer from "../Containers/HeaderContainer";
import { Div } from "../styles/assets/Div";

const RentPage = () => {
    return (
        <Div width="100%">
            <HeaderContainer />
            <Div width="100%" $backcolor="background" $padding="0 3%">
                <AppointmentContainer />
            </Div>
            <BottomContainer />
        </Div>
    );
};

export default RentPage;
