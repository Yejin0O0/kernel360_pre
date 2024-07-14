import styled from "styled-components";
import { Div, FlexDiv } from "../../styles/assets/Div";
import P from "../../styles/assets/P";
import Dropdown from "../Common/Dropdown";

const Point = styled.div`
    width: 11px;
    height: 11px;
    background-color: ${(props) => (props.pick ? "#3563e9" : "#5CAFFC")};
    box-shadow: 0px 0px 0px 5px ${(props) => (props.pick ? "rgba(53, 98, 233, 0.3)" : "rgba(92, 175, 252, 0.3)")};
    border-radius: 50%;
`;

const Appointment = (props) => {
    const { pick } = props;
    const locationList = [
        "서울",
        "부산",
        "인천",
        "대구",
        "대전",
        "광주",
        "수원",
        "울산",
        "창원",
        "성남",
        "고양",
        "용인",
        "청주",
        "전주",
        "천안",
        "포항",
        "김해",
        "제주",
        "안양",
        "평택",
    ];
    const dateList = [
        "08-01",
        "08-02",
        "08-03",
        "08-04",
        "08-05",
        "08-06",
        "08-07",
        "08-08",
        "08-09",
        "08-10",
        "08-11",
        "08-12",
        "08-13",
        "08-14",
        "08-15",
        "08-16",
        "08-17",
        "08-18",
        "08-19",
        "08-20",
        "08-21",
        "08-22",
        "08-23",
        "08-24",
        "08-25",
        "08-26",
        "08-27",
        "08-28",
        "08-29",
        "08-30",
        "08-31",
    ];
    const timeList = [
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
    ];

    return (
        <Div width="582px" $justifycontent="space-between" $padding="30px 50px" $backcolor="wh" $radius="10">
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
                        <Dropdown label="Select your city" options={locationList} />
                    </Div>
                </Div>
                <Div width="154px" height="48px" $borderr="1px solid lightGrey" $margin="0 0 0 13px">
                    <Div $margin="0 0 10px 0">
                        <P $fweight="600" $lineheight="24px">
                            Date
                        </P>
                    </Div>
                    <Div width="126px">
                        <Dropdown label="Select your date" options={dateList} />
                    </Div>
                </Div>
                <Div width="150px" height="48px" $margin="0 0 0 13px">
                    <Div $margin="0 0 10px 0">
                        <P $fweight="600" $lineheight="24px">
                            Time
                        </P>
                    </Div>
                    <Div width="126px">
                        <Dropdown label="Select your time" options={timeList} />
                    </Div>
                </Div>
            </FlexDiv>
        </Div>
    );
};

export default Appointment;
