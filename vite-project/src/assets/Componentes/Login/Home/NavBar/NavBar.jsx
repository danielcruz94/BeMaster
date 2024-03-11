import { Link} from "react-router-dom";


const NavBar=() => {
    



    return (


        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100vw'}}>
            <div style={{margin:'10px',display:'flex',alignItems:'center',marginLeft:'70px'}}>
                <img  style={{width:'60px',marginRight:'10px'}}  src="https://cdn-icons-png.flaticon.com/512/2459/2459778.png" alt="bemaster" />
                <button >
            <Link to="home">Home</Link>
            
        </button>
        <button ><Link to="/accion">Series</Link></button>
         <button>   <Link to="/infantil">Peliculas</Link></button>

            </div>

            <div style={{display:'flex',alignItems:'center'}}>

                <input type="text" name="bucador" id="buscador" />
                <img src="https://img.freepik.com/vector-premium/icono-perfil-usuario-estilo-plano-ilustracion-vector-avatar-miembro-sobre-fondo-aislado-concepto-negocio-signo-permiso-humano_157943-15752.jpg" style={{width:'35px',borderRadius:'50%',margin:'10px'}} alt="usuario" />
            </div>
        </div>
    )


    


    
}

export default NavBar;