import styled from "styled-components";

import { Div, FlexDiv } from "../styles/assets/Div";
import P from "../styles/assets/P";
import Dropdown from "./Dropdown";

const Point = styled.div`
    width: 11px;
    height: 11px;
    background-color: ${(props) => (props.pick ? "#3563e9" : "#5CAFFC")};
    box-shadow: 0px 0px 0px 5px ${(props) => (props.pick ? "rgba(53, 98, 233, 0.3)" : "rgba(92, 175, 252, 0.3)")};
    border-radius: 50%;
`;

const Appointment = (props) => {
    const { pick } = props;
    return (
        <Div
            width="582px"
            height="132px"
            $justifycontent="space-between"
            $padding="30px 50px"
            $backcolor="wh"
            $radius="10"
        >
            <FlexDiv $margin="0 0 20px 0">
                <FlexDiv width="25px" height="30px" $justifycontent="start">
                    <Point pick={pick} />
                </FlexDiv>
                <Div>
                    <P $fweight="600" $lineheight="24px">
                        {pick ? "Pick - Up " : "Drop - Off"}
                    </P>
                </Div>
            </FlexDiv>
            <FlexDiv width="100%" $justifycontent="space-between">
                <Div width="150px" height="48px" $borderr="1px solid lightGrey">
                    <Div $margin="0 0 10px 0">
                        <P $fweight="600" $lineheight="24px">
                            Locations
                        </P>
                    </Div>
                    <Div>
                        <Dropdown label="Select your city" />
                    </Div>
                </Div>
                <Div width="154px" height="48px" $borderr="1px solid lightGrey" $margin="0 0 0 13px">
                    <Div $margin="0 0 10px 0">
                        <P $fweight="600" $lineheight="24px">
                            Date
                        </P>
                    </Div>
                    <Div width="126px">
                        <Dropdown label="Select your date" />
                    </Div>
                </Div>
                <Div width="150px" height="48px" $margin="0 0 0 13px">
                    <Div $margin="0 0 10px 0">
                        <P $fweight="600" $lineheight="24px">
                            Time
                        </P>
                    </Div>
                    <Div width="126px">
                        <Dropdown label="Select your time" />
                    </Div>
                </Div>
            </FlexDiv>
        </Div>
    );
};

export default Appointment;
