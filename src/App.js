import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import RentMorePage from "./Pages/RentMorePage";
import RentNowPage from "./Pages/RentNowPage";
import RentPage from "./Pages/RentPage";
import theme from "./styles/theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<RentPage />} />
                <Route path="/rentmore" element={<RentMorePage />} />
                <Route path="/rentnow" element={<RentNowPage />} />
            </Routes>
        </ThemeProvider>
    );
};

export default App;
