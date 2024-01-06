import styles from "./FavouritesList.module.css";
import { CenterContent } from "../CenterContent/CenterContent";
import { FavouriteProuct } from "../FavouriteProduct/FavouriteProduct";

export function FavouritesList({ favourites }) {
  return (
    <CenterContent>
      <div className={styles.favouritesList}>
        <h2>Ulubione</h2>
        <div>
          {favourites.map((favourite) => {
            return <FavouriteProuct key={favourite.id} favourite={favourite} />;
          })}
        </div>
      </div>
    </CenterContent>
  );
}
