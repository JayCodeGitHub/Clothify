import { Background, OuterWrapper, Wrapper, Subtotal } from "./cart.styles";
import CartItem from "../cartItem/cartItem";
import Button from "../button/button.styles";

interface CartProps {
  isCart: boolean;
  setIsCart: (a: boolean) => void;
}

export default function Cart({ isCart, setIsCart }: CartProps) {
  return (
    <OuterWrapper>
      <Background isCart={isCart} onClick={() => setIsCart(false)} />
      <Wrapper isCart={isCart}>
        <CartItem />
        <Subtotal>Subtotal: 76$</Subtotal>
        <Button>Purchase</Button>
      </Wrapper>
    </OuterWrapper>
  );
}
