import styles from "./CartProductsList.module.css";
import { CenterContent } from "../CenterContent/CenterContent";
import { CartProduct } from "../CartProduct/CartProduct";

export function CartProductList({ products }) {
  return (
    <CenterContent>
      <div className={styles.favouritesList}>
        <h2>Koszyk</h2>
        <div>
          {products.map((product) => {
            return <CartProduct key={product.id} product={product} />;
          })}
        </div>
      </div>
    </CenterContent>
  );
}
