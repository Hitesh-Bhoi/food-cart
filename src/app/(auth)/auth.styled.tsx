"use client";
import styled, { keyframes } from "styled-components";

/* ── Animations ── */
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-32px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  33%      { transform: translateY(-12px) rotate(1deg); }
  66%      { transform: translateY(-6px) rotate(-1deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50%      { opacity: 1; }
`;

const shimmer = keyframes`
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

/* ── Full-page wrapper ── */
export const AuthPageWrapper = styled.div`
  display: flex;
  min-height: 100dvh;
  width: 100%;
  background: #fafbfc;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

/* ── Left decorative panel ── */
export const AuthBrandPanel = styled.div`
  position: relative;
  flex: 0 0 46%;
  background: linear-gradient(165deg, #0d3f0d 0%, #166b16 35%, #20b820 70%, #4dd84d 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 48px;
  overflow: hidden;
  animation: ${fadeIn} 0.6s ease both;

  /* Decorative circles */
  &::before {
    content: "";
    position: absolute;
    top: -15%;
    right: -20%;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
    animation: ${float} 8s ease-in-out infinite;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -20%;
    left: -15%;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
    animation: ${float} 10s ease-in-out infinite reverse;
    pointer-events: none;
  }

  @media (max-width: 900px) {
    flex: 0 0 auto;
    padding: 48px 28px 36px;
    min-height: 220px;
  }
`;

export const BrandContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
  max-width: 400px;
  animation: ${slideInLeft} 0.7s ease 0.2s both;

  .brand-logo {
    width: 200px;
    height: auto;
    margin-bottom: 28px;
    filter: brightness(0) invert(1);
  }

  h1 {
    font-size: 36px;
    font-weight: 800;
    margin: 0 0 14px 0;
    letter-spacing: -0.5px;
    line-height: 1.15;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    opacity: 0.85;
    line-height: 1.6;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 26px;
      margin-bottom: 8px;
    }
    p {
      font-size: 14px;
    }
    .brand-logo {
      width: 80px;
      margin-bottom: 18px;
    }
  }
`;

export const BrandFeatures = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  animation: ${fadeInUp} 0.7s ease 0.5s both;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  font-weight: 500;

  .feature-icon {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 18px;
    transition: background 0.3s, transform 0.3s;
  }

  &:hover .feature-icon {
    background: rgba(255, 255, 255, 0.25);
    transform: scale(1.08);
  }
`;

/* ── Right form panel ── */
export const AuthFormPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 32px;
  animation: ${fadeIn} 0.5s ease 0.15s both;

  @media (max-width: 900px) {
    padding: 32px 20px 48px;
  }
`;

export const AuthFormContainer = styled.div`
  width: 100%;
  max-width: 440px;
  animation: ${fadeInUp} 0.6s ease 0.3s both;
`;

export const AuthFormHeader = styled.div`
  margin-bottom: 32px;
  text-align: center;

  .form-logo {
    width: 140px;
    height: auto;
    margin-bottom: 20px;
  }

  .greeting {
    font-size: 14px;
    font-weight: 600;
    color: var(--green);
    margin: 0 0 6px 0;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 30px;
    font-weight: 800;
    color: #1a1a1a;
    margin: 0;
    letter-spacing: -0.5px;
  }

  .subtitle {
    font-size: 15px;
    color: #888;
    margin: 0;
    font-weight: 400;
    line-height: 1.5;

    a {
      color: var(--green);
      font-weight: 600;
      text-decoration: none;
      transition: color 0.2s;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 0;
        height: 1.5px;
        background: var(--green);
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%;
      }

      &:hover {
        color: #1a9e1a;
      }
    }
  }

  @media (max-width: 600px) {
    margin-bottom: 24px;
    h2 { font-size: 26px; }
    .form-logo { width: 110px; }
  }
`;

/* ── Form ── */
export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  label {
    font-size: 13px;
    font-weight: 600;
    color: #444;
    letter-spacing: 0.2px;
  }

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;

    .input-icon {
      position: absolute;
      left: 14px;
      font-size: 18px;
      color: #bbb;
      transition: color 0.2s;
      pointer-events: none;
    }

    input {
      width: 100%;
      padding: 14px 14px 14px 44px;
      border: 1.5px solid #e4e7eb;
      border-radius: 12px;
      font-size: 15px;
      font-weight: 500;
      color: #1a1a1a;
      background: #fff;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
      font-family: inherit;

      &::placeholder {
        color: #c0c4cc;
        font-weight: 400;
      }

      &:focus {
        border-color: var(--green);
        box-shadow: 0 0 0 3px rgba(32, 184, 32, 0.1);
      }

      &:focus ~ .input-icon,
      &:focus + .input-icon {
        color: var(--green);
      }
    }

    /* when input is focused, color the sibling icon */
    input:focus ~ .input-icon-left {
      color: var(--green);
    }

    .toggle-password {
      position: absolute;
      right: 14px;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 18px;
      color: #bbb;
      display: flex;
      align-items: center;
      padding: 4px;
      transition: color 0.2s;

      &:hover {
        color: #666;
      }
    }
  }

  /* side-by-side inputs on register */
  &.row {
    flex-direction: row;
    gap: 14px;

    @media (max-width: 500px) {
      flex-direction: column;
      gap: 20px;
    }
  }

  &.row > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
`;

export const FormOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -4px;

  .remember-me {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    input[type="checkbox"] {
      width: 16px;
      height: 16px;
      accent-color: var(--green);
      cursor: pointer;
    }

    span {
      font-size: 13px;
      font-weight: 500;
      color: #666;
      user-select: none;
    }
  }

  .forgot-link {
    font-size: 13px;
    font-weight: 600;
    color: var(--green);
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #1a9e1a;
    }
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 12px;
  background: var(--green);
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 4px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  font-family: inherit;
  letter-spacing: 0.3px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.18),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    background: #1a9e1a;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(32, 184, 32, 0.3);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(32, 184, 32, 0.15);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

/* ── Divider ── */
export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 4px 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #e8eaed;
  }

  span {
    font-size: 12px;
    font-weight: 600;
    color: #aaa;
    text-transform: uppercase;
    letter-spacing: 1px;
    white-space: nowrap;
  }
`;

/* ── Social buttons ── */
export const SocialButtons = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const SocialButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 13px 16px;
  border: 1.5px solid #e4e7eb;
  border-radius: 12px;
  background: #fff;
  font-size: 14px;
  font-weight: 600;
  color: #444;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;

  .social-icon {
    font-size: 20px;
    flex-shrink: 0;
  }

  &:hover {
    border-color: #ccc;
    background: #f8f9fa;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const AccountLink = styled.p`
  font-size: 15px;
  color: #888;
  margin: 0;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;

  @media (max-width: 600px) {
    text-align: center;
  }

  a {
    color: var(--green);
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 0;
      height: 1.5px;
      background: var(--green);
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover {
      color: #1a9e1a;
    }
  }
`;

/* ── Terms text ── */
export const TermsText = styled.p`
  font-size: 12px;
  color: #aaa;
  text-align: center;
  margin: 8px 0 0 0;
  line-height: 1.6;

  a {
    color: var(--green);
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;
