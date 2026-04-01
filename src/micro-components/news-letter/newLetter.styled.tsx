import { FlexBox } from "@/styles/mixins";
import styled from "styled-components";

export const NewsLetterMain = styled.div`
  margin: 20px;
  border-radius: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  @media (max-width: 480px) {
    margin: 10px;
    border-radius: 8px;
  }
`;
export const NewsLetterHeader = styled.div`
  ${FlexBox({ justify: "space-between" })}
  padding: 25px 15px;
  border-bottom: 1px solid #d4d6da;
  .news-letter-title-container {
    width: 50%;
    h2 {
      font-size: 2rem;
      font-weight: 600;
      margin-block: 10px;
      span {
        color: var(--green);
      }
    }
    p {
      font-size: 16px;
      font-weight: 500;
      color: #787f8a;
    }
  }
  .news-letter-rating-container {
    width: 25%;
    ${FlexBox({ justify: "space-between", align: "end" })};
    .news-letter-subscriber,
    .news-letter-rating,
    .news-letter-digest {
      ${FlexBox({ direction: "column", align: "center", gap: "10px" })};
      color: #787f8a;
      .title {
        color: var(--green);
        font-size: 34px;
        font-weight: 600;
      }
      .sub-title {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 20px 30px;
    .news-letter-title-container {
      width: 55%;
      h2 {
        font-size: 1.6rem;
      }
      p {
        font-size: 14px;
      }
    }
    .news-letter-rating-container {
      width: 40%;
      .news-letter-subscriber,
      .news-letter-rating,
      .news-letter-digest {
        .title {
          font-size: 26px;
        }
        .sub-title {
          font-size: 12px;
        }
      }
    }
  }

  /* mobile */
  @media (max-width: 767px) {
    ${FlexBox({ direction: "column", gap: "20px" })};
    padding: 20px;
    .news-letter-title-container {
      width: 100%;
      h2 {
        font-size: 1.4rem;
      }
      p {
        font-size: 14px;
      }
    }
    .news-letter-rating-container {
      width: 100%;
      .news-letter-subscriber,
      .news-letter-rating,
      .news-letter-digest {
        .title {
          font-size: 22px;
        }
        .sub-title {
          font-size: 12px;
        }
      }
    }
  }

  /* small mobile */
  @media (max-width: 400px) {
    padding: 16px;
    .news-letter-title-container {
      h2 {
        font-size: 1.2rem;
      }
    }
    .news-letter-rating-container {
      .news-letter-subscriber,
      .news-letter-rating,
      .news-letter-digest {
        .title {
          font-size: 18px;
        }
      }
    }
  }
`;
export const NewsLetterBody = styled.div`
  ${FlexBox({
    justify: "flex-start",
    align: "flex-start",
    direction: "column",
    gap: "20px",
  })}
  border-bottom: 1px solid #d4d6da;
  padding: 25px 15px;
  .subscribe-by-email-container {
    width: 100%;
    ${FlexBox({ justify: "flex-start", gap: "10px" })}
    .subscribe-email-input {
      width: 25%;
      border: 1px solid #d4d6da !important;
      border-radius: 6px;
      padding: 14px 20px;
      font-size: 14px;
      font-weight: 500;
    }
    .subscribe-email-input:focus {
      outline: none;
    }
    .subscribe-btn {
      width: 180px;
      border: none;
      border-radius: 6px;
      background-color: var(--green);
      color: white;
      padding: 14px 20px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      white-space: nowrap;
    }
  }
  .subscribe-checkbox-container {
    ${FlexBox({ gap: "20px" })}
    .responsive-wrapper {
      ${FlexBox({ gap: "20px" })}
    }
    .checkbox-container {
      ${FlexBox({ gap: "6px" })}

      input {
        display: none;
      }

      .checkmark {
        width: 15px;
        height: 15px;
        min-width: 15px;
        border: 1px solid #d4d6da;
        border-radius: 4px;
        display: inline-block;
        position: relative;
      }

      .checkmark::after {
        content: "";
        position: absolute;
        display: none;
      }

      input:checked + .checkmark::after {
        display: block;
        left: 5px;
        top: 1px;
        width: 3px;
        height: 8px;
        border: solid var(--green);
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }

      .checkbox-description {
        font-size: 14px;
        font-weight: 500;
        color: #787f8a;
      }
    }
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 20px 30px;
    .subscribe-by-email-container {
      ${FlexBox({ justify: "flex-start", gap: "10px" })};
      .subscribe-email-input {
        width: 40%;
      }
      .subscribe-btn {
        width: 160px;
        font-size: 15px;
      }
    }
    .subscribe-checkbox-container {
      flex-wrap: wrap;
      gap: 12px;
      .responsive-wrapper {
        gap: 16px;
      }
    }
  }

  /* mobile */
  @media (max-width: 767px) {
    padding: 16px;
    gap: 12px;
    .subscribe-by-email-container {
      flex-direction: column;
      align-items: stretch;
      gap: 8px;
      .subscribe-email-input {
        width: 100%;
        padding: 12px 14px;
        box-sizing: border-box;
      }
      .subscribe-btn {
        width: 100%;
        font-size: 15px;
        padding: 12px 14px;
        box-sizing: border-box;
      }
    }
    .subscribe-checkbox-container {
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
      .responsive-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 16px;
        width: 100%;
      }
      .checkbox-container {
        ${FlexBox({ justify: "flex-start", align: "center", gap: "6px" })};
        flex: 1;
        min-width: 0;
        .checkbox-description {
          font-size: 13px;
          white-space: normal;
          word-break: break-word;
        }
      }
    }
  }

  /* small mobile */
  @media (max-width: 400px) {
    padding: 14px 12px;
    gap: 10px;
    .subscribe-checkbox-container {
      .responsive-wrapper {
        gap: 8px;
      }
    }
  }

  /* very small mobile (iPhone 5 / 320px) */
  @media (max-width: 360px) {
    padding: 12px;
    gap: 8px;
    .subscribe-checkbox-container {
      gap: 4px;
      .responsive-wrapper {
        flex-direction: column;
        gap: 4px;
        width: 100%;
      }
      .checkbox-container {
        width: 100%;
        .checkbox-description {
          font-size: 12px;
          white-space: normal;
        }
      }
    }
  }
`;
export const NewsLetterFooter = styled.div`
  ${FlexBox({ justify: "flex-start" })};
  align-items: stretch;
  .grocery-deals,
  .food-arrivals {
    padding: 25px 15px;
    border-right: 1px solid #d4d6da;
  }
  .subscriber-coupons {
    padding: 25px 15px;
  }
  .grocery-deals,
  .food-arrivals,
  .subscriber-coupons {
    width: 33%;
    ${FlexBox({ justify: "flex-start", align: "center", gap: "10px" })};
    .offer-container {
      ${FlexBox({
        justify: "flex-start",
        direction: "column",
        align: "flex-start",
      })};
      .offer-title {
        font-size: 16px;
        font-weight: 600;
      }
      .offer-description {
        font-size: 14px;
        font-weight: 500;
        color: #787f8a;
      }
    }
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1024px) {
    .grocery-deals,
    .food-arrivals {
      padding: 20px 16px;
    }
    .subscriber-coupons {
      padding: 20px 16px;
    }
    .grocery-deals,
    .food-arrivals,
    .subscriber-coupons {
      .offer-container {
        .offer-title {
          font-size: 14px;
        }
        .offer-description {
          font-size: 13px;
        }
      }
    }
  }

  /* mobile */
  @media (max-width: 767px) {
    ${FlexBox({ direction: "column" })};
    .grocery-deals,
    .food-arrivals {
      border-right: none;
      border-bottom: 1px solid #d4d6da;
      width: 100%;
      box-sizing: border-box;
      padding: 14px 16px;
    }
    .subscriber-coupons {
      width: 100%;
      box-sizing: border-box;
      padding: 14px 16px;
    }
    .grocery-deals,
    .food-arrivals,
    .subscriber-coupons {
      ${FlexBox({ justify: "flex-start", align: "center", gap: "12px" })};
      .offer-container {
        .offer-title {
          font-size: 15px;
        }
        .offer-description {
          font-size: 13px;
        }
      }
    }
  }

  /* small mobile */
  @media (max-width: 400px) {
    .grocery-deals,
    .food-arrivals,
    .subscriber-coupons {
      padding: 12px 12px;
      .offer-container {
        .offer-title {
          font-size: 14px;
        }
        .offer-description {
          font-size: 12px;
        }
      }
    }
  }
`;
