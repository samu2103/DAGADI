import '../../assets/styles/tarjetas.css'

function Tarjetas() {
    return (
        <div className="contenedor4">
        <div className="titulo4">Servicios</div>
        <div className="subtitulo4">En esta empresa nos encargamos del bienestar y seguridad de tus animales</div>
        <div className="tarjetas-container">
            <div className="tarjeta">
                <img src="ruta_de_la_imagen_1" alt="Descripción de la imagen 1" />
                <div className="titulo-tarjeta">Título de la tarjeta 1</div>
            </div>
            <div className="tarjeta">
                <img src="ruta_de_la_imagen_2" alt="Descripción de la imagen 2" />
                <div className="titulo-tarjeta">Título de la tarjeta 2</div>
            </div>
            <div className="tarjeta">
                <img src="ruta_de_la_imagen_3" alt="Descripción de la imagen 3" />
                <div className="titulo-tarjeta">Título de la tarjeta 3</div>
            </div>
            <div className="tarjeta">
                <img src="ruta_de_la_imagen_4" alt="Descripción de la imagen 4" />
                <div className="titulo-tarjeta">Título de la tarjeta 4</div>
            </div>
        </div>
    </div>


      );
}

export default Tarjetas;