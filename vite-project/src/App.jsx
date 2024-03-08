import { useState } from "react";

import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (

    
    
    <div>
      <Routes>
      <Route path='' element={<h1>Hello Bemaster</h1>}/>
      

    </Routes>
    </div>
  );
}

export default App;
