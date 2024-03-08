import "./Form.estilos.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const Form = () => {
  const [userData, setuserData] = useState({
    nombre: "",
    contraseña: "",
  });
  const [select, setSelect] = useState([]);

  const [errors, setErrors] = useState({});
  const navegate = useNavigate();

  const handleChange=(event) => 
  {
    setuserData({...userData,
        [event.target.name]:event.target.value
    
    })
  }



  return (
    <div>
      <form action="" className={"contenedorPrincipal"}>
        <div>
          <label htmlFor="">Usuario:</label>
          <input type="text" name="nombre" value={userData.nombre}
          onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="">Contraseña:</label>
          <input
            type="Password"
            name="contraseña"
            value={userData.contraseña}
            onChange={handleChange}
          />
        </div>
      </form>
      {/* <form action="name" onSubmit={handleSubmit}>
        <label htmlFor="name">Usuario</label>
        <input
          type="text"
          name="name"
          value={userData.nombre}
          onChange={handleChange}
        />

        <label htmlFor="">Contraseña</label>
        <input
          type="Password"
          name="contraseña"
          value={userData.contraseña}
          onChange={handleChange}
        />
        {/* {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>} */}
    </div>
  );
};

export default Form;
