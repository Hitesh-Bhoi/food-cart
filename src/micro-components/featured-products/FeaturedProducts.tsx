"use client";
import { useEffect, useState } from "react";
import data from "../../../public/fake-json/data.json";
import {
  StyledFeaturedProductContainer,
  StyledFeaturedProductHeading,
  StyledFeaturedProductSection,
  StyledFeatureProductCard,
} from "./featuredProducts.styled";
import Image from "next/image";
import { StarRating, ShoppingBag } from "../../../icons";

const FeaturedProducts = () => {
  const [productList, setProductList] = useState<any>([]);

  useEffect(() => {
    const jsonData = [
      {
        title: "season's best fruits",
        description: "fresh fruits picked at their best for flavor and quality.",
        data: data.fruits,
      },
      {
        title: "season's best vegetables",
        description:
          "fresh vegetables selected at their peak quality and flavor.",
        data: data.vegetables,
      },
    ];
    setProductList(jsonData);
  }, []);

  return (
    <>
      <StyledFeaturedProductContainer>
        {productList.map((item: any, i: number) => (
          <StyledFeaturedProductSection key={i + 1}>
            {/* Section heading */}
            <StyledFeaturedProductHeading>
              <div>
                <div className="featured-product-title">{item?.title}</div>
                <div className="featured-product-heading">
                  {item?.description}
                </div>
              </div>
              <button className="see-all-btn">See all</button>
            </StyledFeaturedProductHeading>

            {/* Product cards */}
            <div className="featured-product-row">
              {item?.data?.map((e: any, j: number) => (
                <StyledFeatureProductCard key={j + 1}>
                  {/* Image area */}
                  <div className="product-image-wrap">
                    <button className="wishlist-btn" aria-label="Add to wishlist">
                      ♡
                    </button>
                    <Image
                      src={e?.image_url}
                      alt={e?.name}
                      className="product-image"
                      width={100}
                      height={100}
                    />
                  </div>

                  {/* Content area */}
                  <div className="product-content">
                    <div className="product-info-row">
                      <div className="product-details-left">
                        <div className="product-category">{e?.category}</div>
                        <div className="product-name">{e?.name}</div>
                        <div className="product-rating">
                          <StarRating />
                          <span className="rating-score">4.2</span>
                        </div>
                      </div>
                      <div className="product-price-right">
                        <p className="product-unit">{e?.unit}</p>
                        <p className="product-price">{"₹" + e?.price}</p>
                      </div>
                    </div>
                    <button className="cart-btn">
                      <ShoppingBag />
                      Add to Cart
                    </button>
                  </div>
                </StyledFeatureProductCard>
              ))}
            </div>
          </StyledFeaturedProductSection>
        ))}
      </StyledFeaturedProductContainer>
    </>
  );
};
export default FeaturedProducts;
