import React from "react";
import { ThemeProvider } from "styled-components";

import { Div } from "./styles/assets/Div";
import theme from "./styles/theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Div display="flex" justifyContent="start" alignItems="start" width="100%" height="100%">
                ㅎㅇ
            </Div>
        </ThemeProvider>
    );
};

export default App;
