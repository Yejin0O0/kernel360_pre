import React from "react";
import BottomContainer from "../Containers/Common/BottomContainer";
import HeaderContainer from "../Containers/Common/HeaderContainer";
import RentAdvertisementContainer from "../Containers/Rent/RentAdvertisementContainer";
import RentAppointmentContainer from "../Containers/Rent/RentAppointmentContainer";
import RentPopularCarContainer from "../Containers/Rent/RentPopularCarContainer";
import RentRecommendationCarContainer from "../Containers/Rent/RentRecommendationCarContainer";
import { Div } from "../styles/assets/Div";

const RentPage = () => {
    return (
        <Div width="100%">
            <HeaderContainer />
            <Div width="100%" $backcolor="background" $padding="3%">
                <RentAdvertisementContainer />
                <RentAppointmentContainer />
                <RentPopularCarContainer />
                <RentRecommendationCarContainer />
            </Div>
            <BottomContainer />
        </Div>
    );
};

export default RentPage;
