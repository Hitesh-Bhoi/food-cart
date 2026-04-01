import styled, { keyframes } from "styled-components";

/* ── slide-in animation ──────────────────────────────────── */
const slideUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(120deg, #f6faf7, #f1f7f2);
`;

export const CarouselInner = styled.div`
  position: relative;
  height: 100vh;
  min-height: 560px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);

  @media (min-width: 768px) {
    min-height: 720px;
  }
  @media (max-width: 768px) {
    min-height: 520px;
  }
`;

export const CarouselItem = styled.div<{ $bg: string }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: scale(1.04);
  transition: opacity 0.8s ease, transform 1.1s ease;
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;

  &[data-active="true"] {
    opacity: 1;
    transform: scale(1);
    z-index: 1;

    /* animate content on active */
    .carousel_tag,
    .carousel_title,
    .carousel_description,
    .carousel_buttons {
      animation: ${slideUp} 0.65s ease forwards;
    }
    .carousel_title       { animation-delay: 0.05s; }
    .carousel_description { animation-delay: 0.12s; }
    .carousel_buttons     { animation-delay: 0.2s; }
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      110deg,
      rgba(0, 0, 0, 0.68) 0%,
      rgba(0, 0, 0, 0.38) 45%,
      rgba(0, 0, 0, 0) 72%
    );
  }
`;

export const CarouselContent = styled.div`
  position: absolute;
  top: 50%;
  left: 8%;
  transform: translateY(-50%);
  color: white;
  max-width: 540px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .carousel_tag {
    display: inline-flex;
    align-items: center;
    width: max-content;
    padding: 6px 16px;
    border-radius: 999px;
    background-color: rgba(32, 184, 32, 0.25);
    border: 1px solid rgba(32, 184, 32, 0.55);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #b2f0b2;
    opacity: 0;
  }

  .carousel_title {
    font-size: clamp(30px, 4.5vw, 62px);
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -0.5px;
    opacity: 0;
  }

  .carousel_description {
    font-size: clamp(14px, 1.6vw, 18px);
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
    max-width: 420px;
    font-weight: 400;
    opacity: 0;
  }

  .carousel_buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    opacity: 0;

    button {
      padding: 14px 28px;
      border: none;
      border-radius: 999px;
      cursor: pointer;
      font-size: 15px;
      font-weight: 700;
      transition: transform 0.2s ease, box-shadow 0.2s ease,
        background-color 0.2s ease;
    }

    .button1 {
      background-color: var(--green);
      color: white;
      box-shadow: 0 12px 28px rgba(32, 184, 32, 0.35);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 18px 34px rgba(32, 184, 32, 0.45);
      }
    }

    .button2 {
      background-color: rgba(255, 255, 255, 0.15);
      color: white;
      border: 1.5px solid rgba(255, 255, 255, 0.45);
      backdrop-filter: blur(8px);

      &:hover {
        background-color: rgba(255, 255, 255, 0.28);
        transform: translateY(-2px);
      }
    }
  }

  @media (max-width: 768px) {
    left: 5%;
    right: 5%;
    gap: 12px;
  }
`;

/* ── indicators ─────────────────────────────────────────── */
export const Indicators = styled.div`
  position: absolute;
  z-index: 30;
  display: flex;
  gap: 8px;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
`;

export const IndicatorButton = styled.button`
  height: 8px;
  width: 8px;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.45);
  border: none;
  cursor: pointer;
  transition: width 0.35s ease, background-color 0.25s ease;
  padding: 0;

  &[aria-current="true"] {
    width: 28px;
    background-color: var(--green);
  }
`;

/* ── arrow controls ─────────────────────────────────────── */
const ControlButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  cursor: pointer;
  background: transparent;
  border: none;
`;

export const PrevButton = styled(ControlButton)`
  left: 0;
`;

export const NextButton = styled(ControlButton)`
  right: 0;
`;

export const ControlIconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.38);
    transform: scale(1.08);
  }

  @media (max-width: 640px) {
    width: 36px;
    height: 36px;
  }
`;

export const ControlIcon = styled.svg`
  width: 20px;
  height: 20px;
  color: white;
`;
