import "./style.css";
import Amigurumis from "../../assets/bonequinho-de-neve.png";
import Capivaras from "../../assets/capivaras.jpg";
import Coelho from "../../assets/coelho.jpg";
import HelloKitty from "../../assets/hello-kitty.jpg";
import Flor from "../../assets/flor.jpg";

import { Product } from "../../components/product/Product";

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

export const Homepage = () => {
  return (
    <main>
      <section>
        <img src={Amigurumis} alt="Amigurumis" className="img-amigurumi" />
        <article>
          <h1>Crochês</h1>
          <h2>Por que escolher nossos amigurumis?</h2>
          <ul>
            <li>Feitos à mão com materiais de alta qualidade</li>
            <li>Designs personalizados para atender suas preferências</li>
            <li>Perfeitos para presentes ou decoração</li>
          </ul>
        </article>
      </section>
      <article>
        <h1>Confira nossos produtos</h1>
        <div className="products">
          {products.map((product, index) => (
            <Product
              key={index}
              logoUrl={product.logoUrl}
              name={product.name}
            />
          ))}
        </div>
      </article>
    </main>
  );
};
