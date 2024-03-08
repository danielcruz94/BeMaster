import { useState } from "react";

const Contraseña=() => {


    const [userContraseña, setUserContraseña] = useState('')
    const handleChange=(event) => 
    {   setUserContraseña(event.target.value)
      
    }
    return (
    
        
 <div style={{display:'flex',flexDirection:'column'}} >
          <b><label htmlFor="">Contraseña:</label></b>
          <input
            type="Password"
            name="contraseña"
            value={userContraseña}
            onChange={handleChange}
            className="inputContraseña"
          />
          
        </div>

 
    )
}

export default Contraseña;