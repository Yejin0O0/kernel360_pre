import React from "react";
import CarCard from "../Components/CarCard";
import AdvertisementContainer from "../Containers/AdvertisementContainer";
import AppointmentContainer from "../Containers/AppointmentContainer";
import BottomContainer from "../Containers/BottomContainer";
import HeaderContainer from "../Containers/HeaderContainer";
import PopularCarContainer from "../Containers/PopularCarContainer";
import recommendationCarData from "../data/recommendation-car.json";
import { Div, FlexDiv } from "../styles/assets/Div";
import P from "../styles/assets/P";

const RentPage = () => {
    return (
        <Div width="100%">
            <HeaderContainer />
            <Div width="100%" $backcolor="background" $padding="3%">
                <AdvertisementContainer />
                <AppointmentContainer />
                <PopularCarContainer />

                <FlexDiv direction="column" width="100%">
                    <FlexDiv width="100%" $justifycontent="space-between" $margin="20px 0">
                        <Div>
                            <P color="secondary" $lineheight="21px" $fweight="600">
                                Recommendation Car
                            </P>
                        </Div>
                    </FlexDiv>
                    <FlexDiv width="100%" $justifycontent="space-between">
                        {recommendationCarData.slice(0, 8).map((car) => (
                            <CarCard
                                key={car.id} // key 추가
                                name={car.name}
                                type={car.type}
                                image={car.image}
                                fuelCapacity={car.fuelCapacity}
                                gearType={car.gearType}
                                seats={car.seats}
                                isLiked={car.isLiked}
                                originalPrice={car.originalPrice}
                                salePrice={car.salePrice}
                            />
                        ))}
                    </FlexDiv>
                    <FlexDiv height="44px" $radius="4" $padding="0 20px" $backcolor="primary" $pointer>
                        <P $fweight="600" $lineheight="24px" color="wh">
                            Show more car
                        </P>
                    </FlexDiv>
                </FlexDiv>
            </Div>
            <BottomContainer />
        </Div>
    );
};

export default RentPage;
