import "./Form.estilos.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Email from "./Email/Email";
import Contraseña from "./Contraseña/Contraseña";
const Form = () => {

    const [email,setEmail]=useState(true)
    
const toggle =() => {
setEmail(false)
}



  return (
    <div className="contenedorlogin">
      <form action="" className={"contenedorPrincipal"}>
        {email &&<Email/>}
        {!email &&<Contraseña/>}
       
       
      </form>
      <button onClick={toggle}>Continuar</button>
      
    </div>
  );
};

export default Form;
