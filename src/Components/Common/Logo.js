import { useNavigate } from "react-router-dom";
import { Div } from "../../styles/assets/Div";
import P from "../../styles/assets/P";

const Logo = () => {
    const navigate = useNavigate();
    return (
        <Div $pointer onClick={() => navigate("/")}>
            <P color="primary" $fweight={700} $fsize="xl" $lineheight="48px">
                KernelRent
            </P>
        </Div>
    );
};

export default Logo;
