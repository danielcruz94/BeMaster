import data from '../../../../data.json'
import Card from './Card/Card'
const Home =() => {
  const generos=["Infantil","Acción","Comedia","Romance","Terror"]
    
    return (


    <div className="card" style={{width:'100vw',marginTop:'170px'}}>
        {generos.map((movie) =><Card genero={movie}/>)}
        

    </div>
    )






}

export default Home;