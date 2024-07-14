import Advertisement from "../../Components/Rent/Advertisement";

import { FlexDiv } from "../../styles/assets/Div";

const AdvertisementContainer = () => {
    return (
        <FlexDiv width="100%" $justifycontent="space-between" $margin="0 0 50px 0">
            <Advertisement pattern="circle" image="/images/ad1.png" />
            <Advertisement image="/images/ad2.png" />
        </FlexDiv>
    );
};

export default AdvertisementContainer;
