import "./Form.estilos.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import validation from "./validation";
const Form = ({login}) => {

  
  const [userData,setuserData]=useState({
    email:"",
    contraseña:""
});
const [errors,setErrors]=useState({});


  
const handleChange=(event)=>{
    setuserData({...userData,
        [event.target.name]:event.target.value
    
    })

    const validado=validation(userData);
    setErrors(validado);
}

useEffect(()=>{
    const validado=validation(userData);
    setErrors(validado);
},[userData])


return(
<div className="contenedorlogin">
      <h2 style={{marginTop:'40px'}}>Ingresa tus datos </h2>
      <form action="email" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <span>Email</span>
      <input type="email" name="email" onChange={handleChange}  />
      {errors.email &&<p style={{color:"red"}}>{errors.email}</p>} 
      <span>Contraseña</span>
      <input type="password" name='contraseña' onChange={handleChange}/>
      {errors.contraseña && <p style={{color:"red"}}>{errors.contraseña}</p>} 
      </form>
      <button onClick={() => login(userData.email,userData.contraseña)} style={{width:'120px',marginLeft:'auto',marginRight:'auto',marginTop:'2px'}}>Ingresar</button>

</div>)

};

export default Form;
