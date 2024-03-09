const CardPeliculas =({imagen,nombre}) => {
    
    
    return (


    <div>
        <img src={imagen} alt={nombre} style={{width:'150px',height:'150px',cursor:'pointer'}} />
        
        
    </div>

    )



}

export default CardPeliculas;