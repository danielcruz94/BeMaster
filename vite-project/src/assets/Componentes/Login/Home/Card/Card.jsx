import './Card.style.css'
const Card=({genero,img}) => {


    return (
        <div>
            
            <h2  className='cardImg' >{genero}</h2>
            <img src={img} alt="" style={{width:'200px'}}/>
        </div>
    )
}

export default Card

//"https://static.wikia.nocookie.net/dragonball/images/5/57/Goku_DB_Artwork.png/revision/latest?cb=20160802220130&path-prefix=es"