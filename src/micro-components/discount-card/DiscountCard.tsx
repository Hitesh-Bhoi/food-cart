"use client";

import { StyledDiscountButton, StyledDiscountCardContainer, StyledDiscountContent, StyledDiscountSection, StyledOfferExpireSection } from "./discountCard.styled";

const DiscountCard = () => {
    return (
        <>
            <StyledDiscountCardContainer>
                <StyledDiscountSection>
                    <StyledDiscountContent>
                        <span className="time-offer-tag">Limited Time Offer</span>
                        <p className="discount-title">Get Up to <span className="discount-number">40% OFF</span> on Your First Order!</p>
                        <p className="discount-description">
                            Fresh groceries, unbeatable prices, and quick delivery — all in one place.
                            Shop your favorite fruits, vegetables, snacks, and daily essentials.
                            Apply the exclusive promo code when you checkout.
                            Unlock up to 40% OFF and make your first order a great deal.
                        </p>
                    </StyledDiscountContent>
                    <StyledDiscountButton>
                        <button className="discount-code" type="button">{"FOODIE50"}</button>
                        <button className="claim-discount" type="button">{"Claim Discount"}</button>
                        <button className="view-all-deals" type="button">{"View Deals"}</button>
                    </StyledDiscountButton>
                </StyledDiscountSection>
                <StyledOfferExpireSection>
                    <p className="offer-title">Offer Expires in</p>
                    <p className="timer"><span className="timer-number">24</span>:<span className="timer-number">00</span>:<span className="timer-number">00</span></p>
                </StyledOfferExpireSection>
            </StyledDiscountCardContainer>
        </>
    )
};
export default DiscountCard;