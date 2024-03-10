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
import comediaData from '../src/comediaData.json'
import romanceData from '../src/romanceData.json'
import accionData from '../src/accionData.json'
import terrorData from '../src/terrorData.json'



function App() {
  

  return (

    
    
    <div >
      <NavBar/>
      <Routes>
      {/* // Rutas de categorias */}
      <Route path='/terror' element={<ContentCategory informacion={terrorData}/>}/>
      <Route path='/accion' element={<ContentCategory informacion={accionData}/>}/>
      <Route path='/comedia' element={<ContentCategory informacion={comediaData}/>}/>
      <Route path='/romance' element={<ContentCategory informacion={romanceData}/>}/>
      <Route path='/infantil' element={<ContentCategory informacion={data}/>}/>

      
      <Route path='' element={<h1>BeMaster</h1>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Form/>}/>

    </Routes>
    </div>
  );
}

export default App;
