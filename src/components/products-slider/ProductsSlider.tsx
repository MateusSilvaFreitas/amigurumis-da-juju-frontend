import Capivaras from "../../assets/capivaras.jpg";
import Coelho from "../../assets/coelho.jpg";
import HelloKitty from "../../assets/hello-kitty.jpg";
import Flor from "../../assets/flor.jpg";
import { Product } from "../../components/product/Product";

import "./style.css";

const products = [
  {
    name: "Capivarinhas",
    logoUrl: Capivaras,
  },
  {
    name: "Coelhinho",
    logoUrl: Coelho,
  },
  {
    name: "Hello kitty",
    logoUrl: HelloKitty,
  },
  {
    name: "Florzinha",
    logoUrl: Flor,
  },
];

export const ProductsSlider = () => {
  return (
    <section className="products">
      <h1>Confira nossos produtos</h1>
      <div className="products-slider">
        {products.map((product, index) => (
          <Product key={index} logoUrl={product.logoUrl} name={product.name} />
        ))}
      </div>
    </section>
  );
};
