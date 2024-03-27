import { Link } from 'react-router-dom';
import '../../assets/styles/header.css'
import imagen from '../../assets/img/Logoin.jpg'


function Header() {
    return (
        <>
      <header className="header">
      <div className="header-background">
        <div className="logo-container">
          <img
           src={imagen}
            alt="Logo de la empresa"
            className="logo"
          />
        </div>
        <div className="header-content">
          <h1 className='h1in'>Bienvenidos</h1>
          <hr className="line" />
          <p className='pini'>Somos una empresa enfocada a Bioseguridad y Salud Animal Integral.</p>
          <Link to="/Descricion">
          <button className="btn" >CONOCENOS</button>
          </Link>
          
        </div>
      </div>
    </header>
        </>
    );
}

export default Header;