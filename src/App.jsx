import React, { useState, useEffect } from 'react';

import AppContext from "./context";
import DialogWindow from "./components/DialogWindow";
import AppRouter from "./AppRouter";
import Registration from "./components/Registration";

function App() {
  const [isSigned, setSigned] = useState(false);


  return (
    <div className="App">
      {/* To get something as global one */}
      <AppContext.Provider value={{}} >
        { isSigned
            ? <AppRouter />
            : <Registration />
        }

      </AppContext.Provider>
    </div>
  );
}

export default App;
