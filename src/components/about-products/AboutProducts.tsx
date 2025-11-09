import Amigurumis from "../../assets/bonequinho-de-neve.png";

import "./style.css";

export const AboutProducts = () => {
  return (
    <section className="about-products">
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
  );
};
