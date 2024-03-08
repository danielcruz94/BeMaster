
import { useState } from "react";


const Email=() => {

    const [userEmail, setUserEmail] = useState('')
    const handleChange=(event) => 
    {   setUserEmail(event.target.value)
      
    }
    
    return (
    
        <div style={{display:'flex',flexDirection:'column'}}>
         
        <b><label htmlFor="">Correo Electronico</label></b> 
         <input type="text" name="email" value={userEmail}
         onChange={handleChange}  className={'inputEmail'}
         />
      
       

        </div>
    )
}

export default Email;