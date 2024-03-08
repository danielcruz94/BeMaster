
import { useState } from "react";
import validation from "./validation";

const Email=() => {


    const [userEmail, setUserEmail] = useState('')
    const [errors,setErrors]=useState({});

    const handleChange=(event) => 
    {   setUserEmail(event.target.value)

        const validado=validation(userEmail);
        setErrors(validado);
    }

   

   
    
    return (
    
        <div style={{display:'flex',flexDirection:'column'}}>
         
        <b><label htmlFor="">Correo Electronico</label></b> 
         <input type="text" name="email" value={userEmail}
         onChange={handleChange}  className={'inputEmail'}
         />
        {errors.email &&<p style={{color:"red"}}>{errors.email}</p>} 

      
       

        </div>
    )
}

export default Email;