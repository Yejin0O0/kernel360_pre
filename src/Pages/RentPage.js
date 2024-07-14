import React from "react";
import BottomContainer from "../Containers/Common/BottomContainer";
import HeaderContainer from "../Containers/Common/HeaderContainer";
import AdvertisementContainer from "../Containers/Rent/AdvertisementContainer";
import AppointmentContainer from "../Containers/Rent/AppointmentContainer";
import PopularCarContainer from "../Containers/Rent/PopularCarContainer";
import RecommendationCarContainer from "../Containers/Rent/RecommendationCarContainer";
import { Div } from "../styles/assets/Div";

const RentPage = () => {
    return (
        <Div width="100%">
            <HeaderContainer />
            <Div width="100%" $backcolor="background" $padding="3%">
                <AdvertisementContainer />
                <AppointmentContainer />
                <PopularCarContainer />
                <RecommendationCarContainer />
            </Div>
            <BottomContainer />
        </Div>
    );
};

export default RentPage;
