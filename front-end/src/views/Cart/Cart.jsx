import { CartProductList } from "../../components/CartProductsList/CartProductsList";
import { CartSammary } from "../../components/CartSummary/CartSammary";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Cart() {
  const [cartItems] = useContext(CartContext);

  return (
    <FlexContainer>
      <CartProductList products={cartItems} />
      <CartSammary products={cartItems} />
    </FlexContainer>
  );
}
