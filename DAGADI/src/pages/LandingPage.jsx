import Header from "../components/atomos/Header";
import Servicios from "../components/moleculas/Servicios"
import Productos from "../components/moleculas/Productos"
import Categorias from "../components/moleculas/Categorias"
import Team from "../components/moleculas/Team"
import Ubicaciones from "../components/moleculas/Ubicaciones"
import Footer from "../components/atomos/Footer"

function LandingPage() {
    return (
        <>
        <Header/>
        <Servicios/>
        <Productos/>
        <Categorias/>
        <Team/>
        <Ubicaciones/>
        <Footer/>

      
        </>
    );
}

export default LandingPage;