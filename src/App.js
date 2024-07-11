import React from "react";
import { ThemeProvider } from "styled-components";

import RentPage from "./Pages/RentPage";
import theme from "./styles/theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <RentPage />
        </ThemeProvider>
    );
};

export default App;
