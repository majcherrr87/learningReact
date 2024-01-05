import styles from "./Accordion.module.css";
import { useState } from "react";
import ARROW_ICON from "../../assets/arrow.svg";

export function Accordion({ items }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <ul className={styles.accordion}>
      {items.map((item, index) => {
        return (
          <li key={item.title} onClick={() => setActiveItemIndex(index)}>
            <div className={styles.item}>
              <p>{item.title}</p>
              <img
                className={activeItemIndex === index ? styles.expanded : ""}
                src={ARROW_ICON}
              />
            </div>
            {activeItemIndex === index && <p>{item.content}</p>}
          </li>
        );
      })}
    </ul>
  );
}
