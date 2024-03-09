//Librerias React
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

//Componentes React 
import Form from "./assets/Componentes/Login/Formulario/Form";
import Home from "./assets/Componentes/Login/Home/Home";
import "./App.css";
import NavBar from "./assets/Componentes/Login/Home/NavBar/NavBar";

function App() {
  

  return (

    
    
    <div >
      <NavBar/>
      <Routes>
      <Route path='' element={<h1>BeMaster</h1>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Form/>}/>

    </Routes>
    </div>
  );
}

export default App;
