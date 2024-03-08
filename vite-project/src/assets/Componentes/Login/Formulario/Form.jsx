import "./Form.estilos.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Email from "./Email/Email";
import Contraseña from "./Contraseña/Contraseña";
const Form = () => {




  return (
    <div className="contenedorlogin">
      <form action="" className={"contenedorPrincipal"}>
        <Email/>
       {/* <Contraseña/> */}
       
       
      </form>
      <button>Continuar</button>
      
    </div>
  );
};

export default Form;
