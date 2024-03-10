
import Card from './Card/Card'
import { useNavigate } from "react-router-dom"
const Home =() => {
  const generos=["Infantil","Acción","Comedia","Romance","Terror"]
  const navigate =useNavigate()


  //funcion para navegar entre rutas
  const imprimir = (event) => {
    const rutas = {
      Infantil: `/infantil`,
      Acción: `/accion`,
      Comedia: `/comedia`,
      Romance: `/romance`,
      Terror: `/terror`,
    };
  
    if (rutas.hasOwnProperty(event)) {
      navigate(rutas[event]);
    } else {
      console.warn(`No se encontró una ruta para el género "${event}".`);
    }
  };
  
    return (


    <div className="card" style={{width:'100vw',marginTop:'170px'}} >
        {generos.map((movie) =><Card genero={movie} key={movie} imprimir={imprimir} /> )}
        

    </div>
    )



    // onClick={console.log(`es el `)}


}

export default Home;