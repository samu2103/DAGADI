
import '../../assets/styles/productos.css';
import card1 from '../../assets/img/card1.0.jpeg';

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="ver-mas-btn">Ver más</button>
      </div>
    </div>
  );
};

function Productos() {
  return (
    <div className="productos-container">
      <h1>PRODUCTOS</h1>
      <div className="product-cards-container">
        <ProductCard
          image={card1}
          title="Producto 1"
          description="Descripción del Producto 1."
        />
        <ProductCard
          image={card1}
          title="Producto 2"
          description="Descripción del Producto 2."
        />
        <ProductCard
          image={card1}
          title="Producto 3"
          description="Descripción del Producto 3."
        />
        <ProductCard
          image={card1}
          title="Producto 4"
          description="Descripción del Producto 4."
        />
       
      </div>
    </div>
  );
}

export default Productos;
