import data from '../../../../data.json'
import Card from './Card/Card'
const Home =() => {
  const generos=["Infantil","Acción","Comedia","Romance","Terror"]
    
    return (


    <div className="card">
        {generos.map((movie) =><Card genero={movie}/>)}
        

    </div>
    )






}

export default Home;