import { CenterContent } from "../CenterContent/CenterContent";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import styles from "./Hero.module.css";

export function Hero({ heroImage }) {
  return (
    <div className={styles.hero} style={{ background: `url(${heroImage})` }}>
      <CenterContent>
        <div className={styles.contentWrapper}>
          <h2>Letnie promocje do -70%!</h2>
          <p>Tylko najlepsze okazje!</p>
          <FullWidthButton>Sprawdź produkty</FullWidthButton>
        </div>
      </CenterContent>
    </div>
  );
}
