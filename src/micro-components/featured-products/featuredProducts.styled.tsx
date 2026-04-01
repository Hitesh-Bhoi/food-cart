"use client";
import { FlexBox } from "@/styles/mixins";
import styled from "styled-components";

export const StyledFeaturedProductContainer = styled.div`
  padding: 32px 20px 8px;
`;

export const StyledFeaturedProductSection = styled.div`
  padding-bottom: 24px;

  .featured-product-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 24px;
    padding: 16px 4px 20px;

    @media (max-width: 768px) {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 12px;
      padding: 10px 4px 14px;
      scrollbar-width: none;
      &::-webkit-scrollbar { display: none; }
    }
  }
`;

export const StyledFeaturedProductHeading = styled.div`
  ${FlexBox({ justify: "space-between", align: "flex-end" })};
  padding-block: 8px 14px;

  .featured-product-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--green);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 4px;
  }

  .featured-product-heading {
    font-size: 22px;
    font-weight: 700;
    color: #111;
    line-height: 1.25;
    white-space: normal;
    word-wrap: break-word;

    @media (max-width: 768px) {
      font-size: 19px;
    }
  }

  .see-all-btn {
    border: none;
    background: transparent;
    color: var(--green);
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    white-space: nowrap;
    padding: 6px 0;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.75;
    }
  }
`;

export const StyledFeatureProductCard = styled.div`
  ${FlexBox({ direction: "column", justify: "space-between" })};
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  border-radius: 14px;
  padding: 16px;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.06),
    0 4px 16px rgba(0, 0, 0, 0.07);
  border: 1.5px solid #f0f2f4;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;
  flex-shrink: 0;

  /* ── image area ── */
  .product-image-wrap {
    width: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0 20px;
    position: relative;

    .wishlist-btn {
      position: absolute;
      top: -4px;
      right: -4px;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid #eee;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      color: #ccc;
      transition: color 0.2s, transform 0.2s;
      box-shadow: 0 1px 4px rgba(0,0,0,0.08);

      &:hover {
        color: #e53935;
        transform: scale(1.15);
      }
    }
  }

  .product-image {
    width: 100px;
    height: 100px;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  /* ── content area ── */
  .product-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    flex: 1;
    justify-content: flex-end;
  }

  .product-info-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
  }

  .product-details-left {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }

  .product-category {
    font-size: 11px;
    font-weight: 600;
    color: #9aa5b4;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .product-name {
    font-size: 15px;
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1.25;
  }

  .product-rating {
    ${FlexBox({ align: "center", gap: "4px" })};
    margin-top: 2px;

    .rating-score {
      font-size: 12px;
      font-weight: 700;
      color: #555;
    }
  }

  .product-price-right {
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: flex-end;

    .product-unit {
      font-size: 11px;
      color: #9aa5b4;
      font-weight: 500;
      text-transform: capitalize;
    }

    .product-price {
      font-size: 18px;
      font-weight: 800;
      color: #111;
    }
  }

  .cart-btn {
    ${FlexBox({ justify: "center", align: "center", gap: "6px" })};
    width: 100%;
    padding: 9px 0;
    border-radius: 8px;
    background: rgba(32, 184, 32, 0.1);
    color: var(--green);
    border: 1.5px solid rgba(32, 184, 32, 0.25);
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s, transform 0.15s;
    letter-spacing: 0.02em;

    &:hover {
      background: var(--green);
      color: #fff;
      border-color: var(--green);
      transform: translateY(-1px);
    }
  }

  /* hover lift */
  &:hover {
    transform: translateY(-5px);
    box-shadow:
      0 8px 28px rgba(0, 0, 0, 0.11),
      0 2px 8px rgba(32, 184, 32, 0.08);

    .product-image {
      transform: scale(1.07);
    }
  }

  @media (max-width: 1024px) {
    min-width: 160px;
    width: 160px;

    .product-image {
      width: 86px;
      height: 86px;
    }

    .product-name {
      font-size: 14px;
    }
  }

  @media (max-width: 400px) {
    min-width: 148px;
    width: 148px;
  }
`;
