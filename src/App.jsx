import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";
import {Provider} from "react-redux";
import {rootStore} from "./store";

function App() {
    return (
        <BrowserRouter>
            <Provider store={rootStore}>
                <AppRouter />
            </Provider>
        </BrowserRouter>
    );
}

export default App;
