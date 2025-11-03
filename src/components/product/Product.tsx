import { Button } from "../button/Button";
import "./style.css";

interface ProductProps {
  name?: string;
  logoUrl: string;
}

export const Product = ({ logoUrl, name }: ProductProps) => {
  return (
    <div className="product">
      <img src={logoUrl} alt={name} className="img-product" />
      <Button
        onClick={() =>
          window.open(
            "https://wa.me/5547988294603?text=Oi!%20Quero%20um%20amigurumi%20personalizado!!!",
            "_blank"
          )
        }
      >
        Comprar
      </Button>
    </div>
  );
};
