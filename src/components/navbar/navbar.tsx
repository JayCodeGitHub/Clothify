import { useState } from "react";
import Link from "next/link";
import {
  StyledOuterWrapper,
  StyledWrapper,
  StyledCartIcon,
  StyledNavigationItem,
} from "./navbar.styles";
import Cart from "../cart/cart";
import { useCart } from "@/hooks/useCart";

export default function NavBar() {
  const [isCart, setIsCart] = useState(false);
  const { cart } = useCart();
  return (
    <StyledOuterWrapper>
      <StyledWrapper>
        <StyledNavigationItem>
          <Link href="/">Clothify</Link>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <Link href="/about">About Us</Link>
        </StyledNavigationItem>
      </StyledWrapper>
      <StyledCartIcon quantity={cart.length} onClick={() => setIsCart(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0" />
        </svg>
        <p>Cart</p>
      </StyledCartIcon>
      <Cart isCart={isCart} setIsCart={setIsCart} />
    </StyledOuterWrapper>
  );
}
