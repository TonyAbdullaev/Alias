import React, {StrictMode} from 'react';
import AppRouter from "./AppRouter";
import {Provider} from "react-redux";
import {rootStore} from "./store";

function App() {
    return (
        <StrictMode>
            <Provider store={rootStore}>
                <AppRouter />
            </Provider>
        </StrictMode>
    );
}

export default App;
