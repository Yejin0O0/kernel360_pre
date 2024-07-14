import React from "react";
import BottomContainer from "../Containers/BottomContainer";
import HeaderContainer from "../Containers/HeaderContainer";
import { Div } from "../styles/assets/Div";
import P from "../styles/assets/P";

const RentNowPage = () => {
    return (
        <Div width="100%">
            <HeaderContainer />
            <Div width="100%" $backcolor="background" $padding="3%">
                <P>RentNowPage</P>
            </Div>
            <BottomContainer />
        </Div>
    );
};

export default RentNowPage;
