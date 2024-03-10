import data from '../../../../../../data.json'
import comediaData from '../../../../../../comediaData.json'
import romanceData from '../../../../../../romanceData.json'
import accionData from '../../../../../../accionData.json'
import terrorData from '../../../../../../terrorData.json'
import { useParams } from "react-router-dom";

const ContentDetails = () => {
  
  

  const params =useParams()
  let idPeli=params.id;

  let movie;

    if(idPeli >= 1 && idPeli <= 15){
       movie=data.find((peli) =>peli.id==idPeli )
    }
    if(idPeli >= 16 && idPeli <= 25){
      movie= accionData.find((peli) =>peli.id==idPeli )
    }
    if(idPeli >= 26 && idPeli <= 35){
       movie= comediaData.find((peli) =>peli.id==idPeli )
    }
    if(idPeli >= 36 && idPeli <= 44){
       movie=  romanceData.find((peli) =>peli.id==idPeli )
    }
    if(idPeli >= 43 ){
      movie=terrorData.find((peli) =>peli.id==idPeli )
    }

    
  console.log(movie)
  
  
  return <div>
    <h1 style={{color:'white'}}>{movie.titulo||movie.nombre}</h1>
    <img style={{width:'150px',heigth:'150px',border:'10px solid white'}} src={movie.imagen} alt="imagen" />
   <b><p style={{color:'white'}}>Sinopsis:{movie.descripcion}</p></b> 
    
  </div>;
};

export default ContentDetails;
