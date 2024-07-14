import Advertisement from "../../Components/Rent/RentAdvertisement";

import { FlexDiv } from "../../styles/assets/Div";

const RentAdvertisementContainer = () => {
    return (
        <FlexDiv width="100%" $justifycontent="space-between" $margin="0 0 50px 0">
            <Advertisement pattern="circle" image="/images/ad1.png" />
            <Advertisement image="/images/ad2.png" />
        </FlexDiv>
    );
};

export default RentAdvertisementContainer;
