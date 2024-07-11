import { Div } from "../styles/assets/Div";
import P from "../styles/assets/P";

const Logo = () => {
    return (
        <Div>
            <P color="primary" $fweight={700} $fsize="xl" $lineheight="48px">
                KernelRent
            </P>
        </Div>
    );
};

export default Logo;
