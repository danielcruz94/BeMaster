const CardPeliculas =({imagen,nombre,goMovie}) => {
    
    
    return (


    <div>
        <img src={imagen} alt={nombre} style={{width:'200px',height:'200px',cursor:'pointer'}} onClick={() => goMovie(nombre)} />
        
        
    </div>

    )



}

export default CardPeliculas;