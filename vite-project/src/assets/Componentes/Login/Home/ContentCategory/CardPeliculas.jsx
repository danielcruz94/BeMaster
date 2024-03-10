const CardPeliculas =({imagen,nombre}) => {
    
    
    return (


    <div>
        <img src={imagen} alt={nombre} style={{width:'200px',height:'200px',cursor:'pointer'}} />
        
        
    </div>

    )



}

export default CardPeliculas;