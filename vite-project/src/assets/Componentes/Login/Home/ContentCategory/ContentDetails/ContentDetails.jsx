import data from '../src/data.json'
import comediaData from '../src/comediaData.json'
import romanceData from '../src/romanceData.json'
import accionData from '../src/accionData.json'
import terrorData from '../src/terrorData.json'
import ContentDetails from "./assets/Componentes/Login/Home/ContentCategory/ContentDetails/ContentDetails";
const ContentDetails = () => {
  

  return <div>
    <h1 style={{color:'white'}}>Nemo{}</h1>
    <img style={{width:'300px',heigth:'300px'}} src="https://ca-times.brightspotcdn.com/dims4/default/49e9d3e/2147483647/strip/false/crop/915x700+0+0/resize/915x700!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff9%2F79%2F77a903d4fb0cb58b2031a06873ce%2Fsdhoy-dory-es-un-pez-cirujano-azul-c-20160922" alt="imagen" />
   <b><p style={{color:'white'}}>Sinopsis:{}</p></b> 
    <b><span style={{color:'white'}}>Personajes:{}</span></b>
  </div>;
};

export default ContentDetails;
