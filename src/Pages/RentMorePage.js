import React from "react";
import BottomContainer from "../Containers/Common/BottomContainer";
import HeaderContainer from "../Containers/Common/HeaderContainer";
import { Div } from "../styles/assets/Div";
import P from "../styles/assets/P";

const RentMorePage = () => {
    return (
        <Div width="100%">
            <HeaderContainer />
            <Div width="100%" $backcolor="background" $padding="3%">
                <P>RentMorePage</P>
            </Div>
            <BottomContainer />
        </Div>
    );
};

export default RentMorePage;
