import "./style.css";
import { AboutProducts } from "../../components/about-products/AboutProducts";
import { ProductsSlider } from "../../components/products-slider/ProductsSlider";

export const Homepage = () => {
  return (
    <main>
      <AboutProducts />
      <ProductsSlider />
    </main>
  );
};
