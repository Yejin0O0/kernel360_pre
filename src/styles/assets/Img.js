import styled from "styled-components";

const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: ${(props) => props.$objectfit || "fill"};
`;

export default Img;
