import styles from "./IconMenu.module.css";
import BAG_ICON from "../../assets/bag.svg";
import HEART from "../../assets/heart.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function IconMenu() {
  const [cartItems] = useContext(CartContext);
  console.log(`cart`, cartItems);

  return (
    <ul className={styles.iconMenu}>
      <li>
        <Link to="/ulubione">
          <img src={HEART} alt="" />
        </Link>
      </li>
      <li>
        <Link to="/koszyk">
          <img src={BAG_ICON} alt="" />
          {cartItems.length > 0 && (
            <div className={styles.numberOfProducts}>{cartItems.length}</div>
          )}
        </Link>
      </li>
    </ul>
  );
}
