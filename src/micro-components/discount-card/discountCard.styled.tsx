import { FlexBox } from "@/styles/mixins";
import styled from "styled-components";

export const StyledDiscountCardContainer = styled.div`
    ${FlexBox({ justify: "space-between" })};
    background-color: var(--green);
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(50, 100, 50, 0.4)), url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-block: 50px;
    margin-inline: 20px;
    padding: 25px;
    border-radius: 10px;

    @media (max-width: 768px) {
        ${FlexBox({ direction: "column" })};
        margin: 6px;
        padding: 20px;
    }
`;
export const StyledDiscountSection = styled.div`
    width: 50%;
    ${FlexBox({ direction: "column", justify: "start", align: "start", gap: "25px" })};
    @media (max-width: 768px) {
        width: 100%;
        padding: 10px;
    }
`;
export const StyledDiscountContent = styled.div`
    ${FlexBox({ direction: "column", justify: "start", align: "start", gap: "5px" })};
    .discount-title {
        font-size: 32px;
        color: white;

        .discount-number {
        color: yellow;
        }
    }
    .discount-description {
        font-size: 16px;
        font-weight: 600;
        color: white;
    }
    .time-offer-tag {
        width: max-content;
        ${FlexBox({ justify: "start", gap: "4px" })};
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        color: white;
        background-color: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.35);
        backdrop-filter: blur(6px);
        border-radius: 50px;
        padding: 6px 12px;
    }
    .time-offer-tag::before {
        content: "";
        width: "20px";
        height: "20px";
        background-color: white;
        border-radius: 50%;
        padding: 3px;
        color: white;
    }
    @media (max-width: 768px) {
        .discount-title {
            font-size: 24px;
        }
        .discount-description {
            font-size: 14px;
        }
    }
`;
export const StyledDiscountButton = styled.div`
    ${FlexBox({ justify: "start", gap: "10px" })};
    button {
        border-radius: 10px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        }
        .discount-code {
            padding: 12px 18px;
            background-color: yellow;
            border: 2px dashed gray;
            }   
        .claim-discount {
            padding: 12px 15px;
            background-color: white;
            color: var(--green);
            border: none;
            }
        .view-all-deals {
            padding: 12px 15px;
            background-color: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.35);
            backdrop-filter: blur(6px);
            color: white;
        }
    @media (max-width: 768px) {
        gap: 8px;
        .discount-code {
            font-size: 14px;
            padding: 12px 20px;
        }
        .claim-discount {
            font-size: 14px;
            padding: 8px 12px;
        }
        .view-all-deals {
            font-size: 14px;
            padding: 8px 12px;
        }
    }
`;
export const StyledOfferExpireSection = styled.div`
    width: 25%;
    padding: 50px 20px;
    background-color: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(6px);
    border-radius: 10px;
    ${FlexBox({ direction: "column", gap: "5px" })};
    .offer-title {
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.66);
    }
    .timer {
        font-size: 28px;
        font-weight: 600;
        color: white;
        .timer-number {
            padding: 4px 8px;
            background-color: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.35);
            backdrop-filter: blur(6px);
            color: rgba(255, 255, 255, 0.73);
            border-radius: 5px;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        padding-inline: 1px;
    }
`;