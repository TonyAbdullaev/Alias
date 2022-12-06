import React, { useState, useEffect } from 'react';

import AppContext from "./context";
import DialogWindow from "./components/DialogWindow";
import AppRouter from "./AppRouter";

function App() {
  const isRegistered = true;


  return (
    <div className="App">
      {/* To get something as global one */}
      <AppContext.Provider value={{}} >
        { isRegistered
            ? <AppRouter />
            : <DialogWindow />
        }

      </AppContext.Provider>
    </div>
  );
}

export default App;
