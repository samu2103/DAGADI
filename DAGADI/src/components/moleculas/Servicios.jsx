import '../../assets/styles/servicios.css'
import Dago from '../../assets/img/Dago2.png'
import Gadi1 from '../../assets/img/Gadi 1.png'
import pru1 from '../../assets/img/pru1.jpeg'



function Servicios() {
    return (
      <div>
      {/* Primer bloque */}
      <h1 className="HSER">SERVICIOS </h1>
      <div className="contenedor">
        <div className="contenido">
          <h1 className='gadi11'>Otro Título </h1>
          <p className='pgadi'>Texto descriptivo sobre algo.</p>
        </div>
        <div className="foto">
          <img src={Gadi1} alt="Descripción de la imagen" />
        </div>
      
        
      </div>
    

      {/* Segundo bloque */}
      <div className="contenedor">
        <div className="foto-alternativa">
          <img src={Dago} alt="Descripción de la otra imagen" />
        </div>
        <div className="contenido">
          <h1 className='gadi11'>Otro Título</h1>
          <p className='pgadi'>Texto descriptivo sobre algo diferente.</p>
        </div>
      </div>
    </div>
     );
}

export default Servicios;