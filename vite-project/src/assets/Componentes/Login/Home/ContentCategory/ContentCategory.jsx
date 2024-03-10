import { useNavigate,useLocation } from "react-router-dom"

import CardPeliculas from './CardPeliculas';
const ContentCategory =({informacion}) => {
    const navegate = useNavigate();
  
    const {pathname}=useLocation();
    
    const goMovie=(id) => {
        
        navegate(`/detalle/${id}`)
       
        

    }

    return (


    <div style={{display:'flex',flexWrap:'wrap',width:'90vw',margin:'100px',gap:'10px'}}>
        {informacion.map((movie) =><CardPeliculas imagen={movie.imagen} nombre={movie.nombre||movie.titulo} key={movie.nombre|| movie.titulo} goMovie={goMovie} id={movie.id}/>  )}
    </div>

    )



}

export default ContentCategory;

// onclick={() => goMovie(movie.nombre)}