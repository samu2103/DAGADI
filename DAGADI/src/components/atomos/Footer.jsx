import '../../assets/styles/footer.css'
import FO1 from "../../assets/img/FO1.jpg"
import F02 from "../../assets/img/FO2.jpg"
function Footer() {
    return ( 

        <footer className="custom-footer">
        <div className="footer-content">
          <div className="footer-left">
            <img21 src={FO1} alt="Imagen 1" />
          </div>
          <p> DISTRIBUIDORA DAGADI &copy; 2024</p>
          <div className="footer-right">
            <img21  src={F02}alt="Imagen 2" />
          </div>
        </div>
      </footer>

     );
}

export default Footer;
;