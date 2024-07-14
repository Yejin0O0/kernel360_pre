import React from "react";
import AdvertisementContainer from "../Containers/AdvertisementContainer";
import AppointmentContainer from "../Containers/AppointmentContainer";
import BottomContainer from "../Containers/BottomContainer";
import HeaderContainer from "../Containers/HeaderContainer";
import PopularCarContainer from "../Containers/PopularCarContainer";
import RecommendationCarContainer from "../Containers/RecommendationCarContainer";
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
