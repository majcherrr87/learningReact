import REMOVE_ICON from "../../assets/remove.svg";
import BAG_ICON from "../../assets/bag.svg";
import styles from "./FavouriteProduct.module.css";
import { useFetcher } from "react-router-dom";
import { Price } from "../Price/Price";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function FavouriteProuct({ favourite: { product, id } }) {
  const [, addProductToCart] = useContext(CartContext);
  const { Form } = useFetcher();
  return (
    <div className={styles.favouriteProduct}>
      <img src={product.photos[0]} alt="photo" />
      <div className={styles.favouriteProductInfo}>
        <div className={styles.topRow}>
          <h3>
            {product.brand} {product.productName}
          </h3>
          <p>
            <Price product={product} />
          </p>
        </div>
        <p className={styles.priceRow}>
          <span>Cena:</span>
          <Price product={product} />
        </p>
        <div className={styles.buttonRow}>
          <Form action={`/delete-from-favourites/${id}`} method="DELETE">
            <button>
              <img src={REMOVE_ICON} />
              Usuń
            </button>
          </Form>
          <button onClick={() => addProductToCart(product)}>
            <img src={BAG_ICON} />
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
}
