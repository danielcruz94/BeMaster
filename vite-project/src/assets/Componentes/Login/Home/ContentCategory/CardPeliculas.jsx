
const CardPeliculas =({imagen,nombre,goMovie,id}) => {
   
    return (


    <div>
        <img src={imagen} alt={nombre} style={{width:'200px',height:'200px',cursor:'pointer'}} onClick={() => goMovie(id)} />
       
        
    </div>

    )



}

export default CardPeliculas;