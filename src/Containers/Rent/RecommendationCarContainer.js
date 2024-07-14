import CarCard from "../../Components/Common/CarCard";
import LongSquareBtn from "../../Components/Common/LongSquareBtn";
import recommendationCarData from "../../data/recommendation-car.json";
import { Div, FlexDiv } from "../../styles/assets/Div";
import P from "../../styles/assets/P";

const RecommendationCarContainer = () => {
    return (
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
            <LongSquareBtn text="Show more car" move="rentmore" />
        </FlexDiv>
    );
};

export default RecommendationCarContainer;
