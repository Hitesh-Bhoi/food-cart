import styled from "styled-components";

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
  /* border-radius: 26px; */
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
  transform: scale(1.02);
  transition: opacity 0.7s ease, transform 0.9s ease;
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;

  &[data-active="true"] {
    opacity: 1;
    transform: scale(1);
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      110deg,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.35) 45%,
      rgba(0, 0, 0, 0) 70%
    );
  }
`;

export const CarouselContent = styled.div`
  position: absolute;
  top: 50%;
  left: 8%;
  transform: translateY(-50%);
  color: white;
  max-width: 520px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .carousel_tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    padding: 6px 14px;
    border-radius: 999px;
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.35);
    font-size: 12px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .carousel_title {
    font-size: clamp(28px, 4vw, 56px);
    line-height: 1.05;
  }
  .carousel_description {
    font-size: clamp(14px, 1.6vw, 18px);
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.88);
    max-width: 420px;
  }
  .carousel_buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;

    button {
      padding: 12px 20px;
      border: none;
      border-radius: 999px;
      cursor: pointer;
      font-weight: 600;
      transition: transform 0.2s ease, box-shadow 0.2s ease,
        background-color 0.2s ease, color 0.2s ease;
    }

    .button1 {
      background-color: var(--green);
      color: white;
      box-shadow: 0 12px 24px rgba(32, 184, 32, 0.3);
    }
    .button1:hover {
      transform: translateY(-1px);
      box-shadow: 0 16px 28px rgba(32, 184, 32, 0.4);
    }
    .button2 {
      background-color: rgba(255, 255, 255, 0.15);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.35);
      backdrop-filter: blur(6px);
    }
    .button2:hover {
      background-color: rgba(255, 255, 255, 0.25);
      transform: translateY(-1px);
    }
  }
  @media (max-width: 768px) {
    left: 6%;
    right: 6%;
    transform: translateY(-50%);
  }
`;

export const Indicators = styled.div`
  position: absolute;
  z-index: 30;
  display: flex;
  gap: 0.75rem;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const IndicatorButton = styled.button`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.55);
  outline: 1px solid rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;

  &[aria-current="true"] {
    background-color: white;
  }
`;

export const ControlButton = styled.button`
  position: absolute;
  top: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 1rem;
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
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(6px);
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-1px);
  }
`;

export const ControlIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  color: white;
`;
