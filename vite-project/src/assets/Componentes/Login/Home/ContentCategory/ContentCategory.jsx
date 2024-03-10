import { useNavigate,useLocation } from "react-router-dom"

import CardPeliculas from './CardPeliculas';
const ContentCategory =({informacion}) => {
    const navegate = useNavigate();
  
    const {pathname}=useLocation();
    
    const goMovie=(nombre) => {
        
        navegate(`/detalle/${nombre}`)
        console.log(nombre)

    }

    return (


    <div style={{display:'flex',flexWrap:'wrap',width:'90vw',margin:'100px',gap:'10px'}}>
        {informacion.map((movie) =><CardPeliculas imagen={movie.imagen} nombre={movie.nombre||movie.titulo} key={movie.nombre|| movie.titulo} goMovie={goMovie} />  )}
    </div>

    )



}

export default ContentCategory;

// onclick={() => goMovie(movie.nombre)}