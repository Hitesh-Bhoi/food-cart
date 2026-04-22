"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { HiOutlineTrash } from "react-icons/hi2";
import { HiOutlineShoppingCart, HiOutlineArrowLeft, HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineTruck, HiOutlineLockClosed, HiOutlineShieldCheck } from "react-icons/hi2";
import {
  CartHeader,
  CartContainer,
  CartTitle,
  CartGrid,
  CartItemsList,
  CartItemCard,
  ItemInfo,
  ItemActions,
  CartSummary,
  CouponSection,
  EmptyCart,
} from "./cart.styled";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();
  const [couponCode, setCouponCode] = useState("");

  const TAX_RATE = 0.05; // 5% GST
  const taxAmount = totalPrice * TAX_RATE;
  const finalTotal = totalPrice + taxAmount;

  const handleCheckout = () => {
    alert("Proceeding to checkout with " + cartItems.length + " items!");
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      alert(`Coupon "${couponCode}" applied!`);
      setCouponCode("");
    }
  };

  if (cartItems.length === 0) {
    return (
      <>
        <CartHeader>
          <CartTitle>
            <div className="title-left">
              <HiOutlineShoppingBag className="cart-heading-icon" />
              <h1>Shopping Cart</h1>
            </div>
            <div className="title-right">
              <p className="cart-subtitle">Your cart is empty</p>
            </div>
          </CartTitle>
        </CartHeader>
        <CartContainer>
          <EmptyCart>
            <div className="empty-icon">
              <HiOutlineShoppingCart />
            </div>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added any fresh produce yet.</p>
            <Link href="/dashboard">
              <HiOutlineArrowLeft className="back-icon" />
              Continue Shopping
            </Link>
          </EmptyCart>
        </CartContainer>
      </>
    );
  }

  return (
    <>
      <CartHeader>
        <CartTitle>
          <div className="title-left">
            <HiOutlineShoppingBag className="cart-heading-icon" />
            <h1>Shopping Cart</h1>
          </div>
          <div className="title-right">
            <p className="cart-subtitle">
              You have <span>{totalItems} {totalItems === 1 ? "item" : "items"}</span> in your cart
            </p>
          </div>
        </CartTitle>
      </CartHeader>

      <CartContainer>
        <CartGrid>
          <CartItemsList>
            {cartItems.map((item, index) => (
              <CartItemCard key={item.id} style={{ animationDelay: `${index * 0.08}s` }}>
                <ItemInfo>
                  <div className="item-image-wrapper">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-unit-price">₹{item.price.toFixed(2)} / {item.unit}</p>
                  </div>
                </ItemInfo>

                <ItemActions>
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.name, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.name, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <div className="price">₹{(item.price * item.quantity).toFixed(2)}</div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.name)}
                    aria-label="Remove item"
                    title="Remove from cart"
                  >
                    <HiOutlineTrash />
                  </button>
                </ItemActions>
              </CartItemCard>
            ))}
          </CartItemsList>

          <CartSummary>
            <h2>
              <HiOutlineShieldCheck style={{ color: "var(--green)", fontSize: 22 }} />
              Order Summary
            </h2>

            <div className="summary-row">
              <span>Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"})</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span style={{ color: "var(--green)", fontWeight: 700 }}>FREE</span>
            </div>
            <div className="summary-row tax">
              <span>GST (5%)</span>
              <span>₹{taxAmount.toFixed(2)}</span>
            </div>

            <div className="free-delivery-badge">
              <HiOutlineTruck className="delivery-icon" />
              Free delivery on all orders!
            </div>

            <CouponSection>
              <div className="coupon-input-wrapper">
                <input
                  type="text"
                  placeholder="Coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleApplyCoupon()}
                />
                <button onClick={handleApplyCoupon}>Apply</button>
              </div>
            </CouponSection>

            <div className="summary-row total">
              <span>Total</span>
              <span>₹{finalTotal.toFixed(2)}</span>
            </div>

            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>

            <div className="secure-badge">
              <HiOutlineLockClosed className="lock-icon" />
              Secure checkout · SSL encrypted
            </div>
          </CartSummary>
        </CartGrid>
      </CartContainer>
    </>
  );
}
