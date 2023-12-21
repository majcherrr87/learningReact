import styles from "./FavouritesList.module.css";
import { CenterContent } from "../CenterContent/CenterContent";
import { FavouriteProuct } from "../FavouriteProduct/FavouriteProduct";
export function FavouritesList({ products }) {
  return (
    <CenterContent>
      <div className={styles.favouritesList}>
        <h2>Ulubione</h2>
        <div>
          {products.map((product) => {
            return <FavouriteProuct key={product.id} product={product} />;
          })}
        </div>
      </div>
    </CenterContent>
  );
}
