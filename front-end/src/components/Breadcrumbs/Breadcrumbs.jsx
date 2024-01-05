import styles from "./Breadcrumbs.module.css";
import ARROW_ICON from "../../assets/arrow.svg";
import { NavLink } from "react-router-dom";

export function Breadcrumbs() {
  const breadcrumbs = [
    {
      categoryName: "Kobieta",
      path: "kobieta",
    },
    {
      categoryName: "Odzież",
      path: "odziez",
    },
    {
      categoryName: "Swetry",
      path: "swetry",
    },
  ];
  return (
    <ul className={styles.breadcrumbs}>
      {breadcrumbs.map((breadcrumbs) => {
        return (
          <li key={breadcrumbs.path}>
            <NavLink to={breadcrumbs.path}>
              {breadcrumbs.categoryName}
              <img src={ARROW_ICON} />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
