const validation=(userEmail)=>{
    const errors={};



    if(/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.){1,2}[a-zA-Z]{2,}))$/.test(userEmail)) {
        errors.email = 'Email no valido'
    }
    

   



      
  

    // if(!/\d/.test(userData.attack)) {
    //     errors.attack = 'Debe contener al menos un número'
    // }
    

    return errors;
}



export default validation;