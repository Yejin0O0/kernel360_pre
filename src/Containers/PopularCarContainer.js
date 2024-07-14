import CarCard from "../Components/CarCard";
import popularCarData from "../data/popular-car.json";
import { Div, FlexDiv } from "../styles/assets/Div";
import P from "../styles/assets/P";

const PopularCarContainer = () => {
    return (
        <Div width="100%" $margin="50px 0 10px 0">
            <FlexDiv width="100%" $justifycontent="space-between" $margin="20px 0">
                <Div>
                    <P color="secondary" $lineheight="21px" $fweight="600">
                        Popular Car
                    </P>
                </Div>
                <Div $pointer>
                    <P color="primary" $lineheight="21px" $fweight="600">
                        View All
                    </P>
                </Div>
            </FlexDiv>
            <FlexDiv width="100%" $justifycontent="space-between">
                {popularCarData.slice(0, 4).map((car) => (
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
        </Div>
    );
};

export default PopularCarContainer;
