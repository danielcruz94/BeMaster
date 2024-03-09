

import CardPeliculas from './CardPeliculas';
const ContentCategory =({informacion}) => {
    
    
    return (


    <div style={{display:'flex',flexWrap:'wrap',width:'90vw',margin:'100px',gap:'10px'}}>
        {informacion.map((movie) =><CardPeliculas imagen={movie.imagen} nombre={movie.nombre} key={movie.nombre}/>  )}
    </div>

    )



}

export default ContentCategory;