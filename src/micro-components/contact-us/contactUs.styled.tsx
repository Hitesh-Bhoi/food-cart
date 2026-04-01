import { FlexBox } from "@/styles/mixins";
import styled from "styled-components";

/* ─── tokens (mirror project globals) ─────────────────────────────────── */
const green = "var(--green)";
const greenLight = "rgba(32,184,32,0.10)";
const greenSoft = "rgba(32,184,32,0.22)";
const border = "#d4d6da";
const textMuted = "#787f8a";
const shadow =
  "rgba(0,0,0,0.25) 0px 0.0625em 0.0625em, rgba(0,0,0,0.25) 0px 0.125em 0.5em, rgba(255,255,255,0.1) 0px 0px 0px 1px inset";
const shadowGreen = "0 6px 28px rgba(32,184,32,0.22)";

/* ─── wrapper ──────────────────────────────────────────────────────────── */
export const ContactUsMain = styled.div`
  margin: 20px;
  border-radius: 10px;
  box-shadow: ${shadow};
  overflow: hidden;

  @media (max-width: 480px) {
    margin: 10px;
    border-radius: 8px;
  }
`;

/* ─── section header bar ───────────────────────────────────────────────── */
export const ContactUsHeader = styled.div`
  background: linear-gradient(
    90deg,
    ${greenLight} 0%,
    rgba(32, 184, 32, 0.04) 100%
  );
  border-bottom: 1px solid ${border};
  padding: 28px 50px;
  ${FlexBox({ justify: "space-between", align: "center" })};

  .contact-title-block {
    h2 {
      font-size: 1.9rem;
      font-weight: 700;
      margin: 0 0 6px;
      span {
        color: ${green};
      }
    }
    p {
      font-size: 15px;
      font-weight: 500;
      color: ${textMuted};
      max-width: 420px;
    }
  }

  .contact-chip {
    ${FlexBox({ align: "center", gap: "8px" })};
    background: ${greenLight};
    border: 1px solid ${greenSoft};
    border-radius: 99px;
    padding: 6px 18px;
    font-size: 12px;
    font-weight: 700;
    color: ${green};
    letter-spacing: 0.06em;
    white-space: nowrap;

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${green};
      animation: pulse-dot 1.6s infinite;
    }
  }

  @keyframes pulse-dot {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 22px 30px;
    .contact-title-block h2 {
      font-size: 1.6rem;
    }
  }

  /* mobile */
  @media (max-width: 767px) {
    ${FlexBox({ direction: "column", align: "flex-start", gap: "14px" })};
    padding: 20px 16px;
    .contact-title-block {
      h2 {
        font-size: 1.3rem;
      }
      p {
        font-size: 13px;
      }
    }
  }
`;

/* ─── body grid (info left | form right) ──────────────────────────────── */
export const ContactUsBody = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  min-height: 480px;

  /* tablet */
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: 260px 1fr;
  }

  /* mobile */
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

/* ─── left panel — info + social ─────────────────────────────────────── */
export const ContactInfoPanel = styled.div`
  ${FlexBox({ direction: "column", justify: "flex-start", align: "stretch", gap: "0px" })};
  border-right: 1px solid ${border};
  padding: 32px 24px;
  background: #fafafa;
  gap: 20px;

  .info-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 14px;
    padding: 12px 0;
    border-bottom: 1px solid ${border};

    &:last-of-type {
      border-bottom: none;
      padding-bottom: 0;
    }

    .info-icon {
      width: 42px;
      height: 42px;
      min-width: 42px;
      background: ${greenLight};
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${green};
      flex-shrink: 0;
    }

    .info-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2px;

      h4 {
        font-size: 13px;
        font-weight: 700;
        color: #111;
        margin: 0;
        line-height: 1.3;
      }
      p {
        font-size: 13px;
        font-weight: 500;
        color: ${textMuted};
        margin: 0;
        line-height: 1.3;
      }
    }
  }

  .social-buttons {
    ${FlexBox({ gap: "8px" })};
    flex-wrap: wrap;

    .social-btn {
      flex: 1;
      min-width: 80px;
      padding: 10px 8px;
      border-radius: 8px;
      background: ${greenLight};
      border: 1px solid ${greenSoft};
      color: ${green};
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      text-align: center;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      transition: background 0.2s, color 0.2s, transform 0.15s;

      &:hover {
        background: ${green};
        color: #fff;
        transform: translateY(-1px);
      }
    }
  }

  /* mobile */
  @media (max-width: 767px) {
    border-right: none;
    border-bottom: 1px solid ${border};
    padding: 20px 16px;
    gap: 14px;
  }
`;

/* ─── right panel — message form ─────────────────────────────────────── */
export const ContactFormPanel = styled.div`
  padding: 32px 36px;
  ${FlexBox({ direction: "column", justify: "flex-start", align: "stretch", gap: "0px" })};

  .form-heading {
    margin-bottom: 4px;
    font-size: 1.2rem;
    font-weight: 700;
    color: #111;
  }

  .form-sub {
    font-size: 13px;
    font-weight: 500;
    color: ${textMuted};
    margin-bottom: 18px;
  }

  /* topic chips */
  .topic-label {
    font-size: 12px;
    font-weight: 700;
    color: ${textMuted};
    letter-spacing: 0.06em;
    margin-bottom: 10px;
  }

  .topic-chips {
    ${FlexBox({ justify: "flex-start", gap: "8px" })};
    flex-wrap: wrap;
    margin-bottom: 20px;

    .chip {
      padding: 7px 16px;
      border-radius: 99px;
      border: 1.5px solid ${border};
      background: #fff;
      font-size: 13px;
      font-weight: 600;
      color: ${textMuted};
      cursor: pointer;
      transition: background 0.2s, color 0.2s, border-color 0.2s;

      &:hover,
      &.active {
        background: ${green};
        color: #fff;
        border-color: ${green};
      }
    }
  }

  /* form rows */
  .form-row {
    ${FlexBox({ gap: "14px" })};
    margin-bottom: 14px;
  }

  /* floating-label field */
  .fl-group {
    flex: 1;
    position: relative;
    min-width: 0;

    input,
    textarea {
      width: 100%;
      padding: 20px 14px 8px;
      border: 1.5px solid ${border};
      border-radius: 8px;
      font-size: 14px;
      font-family: inherit;
      font-weight: 500;
      color: #111;
      background: #fafafa;
      outline: none;
      resize: vertical;
      transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
      box-sizing: border-box;

      &:focus {
        border-color: ${green};
        box-shadow: 0 0 0 3px ${greenLight};
        background: #fff;
      }
    }

    label {
      position: absolute;
      left: 14px;
      top: 14px;
      font-size: 13px;
      font-weight: 500;
      color: #b0b8c4;
      pointer-events: none;
      transition: top 0.18s, font-size 0.18s, color 0.18s;
    }

    input:focus ~ label,
    input:not(:placeholder-shown) ~ label,
    textarea:focus ~ label,
    textarea:not(:placeholder-shown) ~ label {
      top: 6px;
      font-size: 10px;
      font-weight: 700;
      color: ${green};
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
  }

  .message-group {
    margin-bottom: 20px;
  }

  /* footer row */
  .form-footer {
    ${FlexBox({ justify: "space-between", align: "center", gap: "12px" })};
    flex-wrap: wrap;

    .privacy-note {
      font-size: 12px;
      font-weight: 500;
      color: #b0b8c4;

      a {
        color: ${green};
        text-decoration: none;
        font-weight: 600;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    .send-btn {
      ${FlexBox({ align: "center", gap: "8px" })};
      padding: 13px 32px;
      background: ${green};
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
      box-shadow: ${shadowGreen};
      transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
      white-space: nowrap;

      &:hover {
        background: #17981a;
        transform: translateY(-2px);
        box-shadow: 0 8px 32px rgba(32, 184, 32, 0.32);
      }
    }
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 24px 22px;
  }

  /* mobile */
  @media (max-width: 767px) {
    padding: 20px 16px;

    .form-row {
      flex-direction: column;
      gap: 10px;
      margin-bottom: 10px;
    }

    /* switch to label-above-input on mobile */
    .fl-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 4px;

      label {
        position: static;
        font-size: 11px;
        font-weight: 700;
        color: ${textMuted};
        text-transform: uppercase;
        letter-spacing: 0.05em;
        top: unset;
        left: unset;
        pointer-events: auto;
        transition: none;
      }

      input,
      textarea {
        padding: 11px 12px;

        &:focus ~ label,
        &:not(:placeholder-shown) ~ label {
          top: unset;
          font-size: 11px;
          color: ${textMuted};
          letter-spacing: 0.05em;
        }
      }

      /* re-order so label renders above input */
      input,
      textarea {
        order: 2;
      }

      label {
        order: 1;
      }
    }

    .message-group {
      margin-bottom: 14px;
    }

    .form-footer {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;

      .send-btn {
        width: 100%;
        justify-content: center;
        padding: 13px 20px;
      }
    }
  }

  /* small mobile */
  @media (max-width: 400px) {
    padding: 14px 12px;
  }
`;
