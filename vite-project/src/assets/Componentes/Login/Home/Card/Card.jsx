import './Card.style.css'
const Card=({genero,img,imprimir}) => {


    return (
        <div >
            
            <h2  className='cardImg' onClick={() => imprimir(genero)}>{genero}</h2>
           
        </div>
    )
}

export default Card

//"https://static.wikia.nocookie.net/dragonball/images/5/57/Goku_DB_Artwork.png/revision/latest?cb=20160802220130&path-prefix=es"