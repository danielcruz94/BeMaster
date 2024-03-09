//Librerias React
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

//Componentes React 
import Form from "./assets/Componentes/Login/Formulario/Form";
import Home from "./assets/Componentes/Login/Home/Home";
import "./App.css";
import NavBar from "./assets/Componentes/Login/Home/NavBar/NavBar";
import ContentCategory from "./assets/Componentes/Login/Home/ContentCategory/ContentCategory";

import data from '../src/data.json'


function App() {
  

  return (

    
    
    <div >
      <NavBar/>
      <Routes>
      <Route path='/accion' element={<ContentCategory informacion={data}/>}/>
      <Route path='/comedia' element={<ContentCategory informacion={data}/>}/>
      <Route path='/romance' element={<ContentCategory informacion={data}/>}/>
      <Route path='/infantiles' element={<ContentCategory informacion={data}/>}/>
      <Route path='' element={<h1>BeMaster</h1>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Form/>}/>

    </Routes>
    </div>
  );
}

export default App;
