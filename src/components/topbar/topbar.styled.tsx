"use client";
import styled from "styled-components";

export const StyledTopbarContainer = styled.div`
  /* background-color: white;
  display: none;
  padding-inline: 10px;
  position: sticky;
  top: 0;
  z-index: 999;
  transition: all 0.3s ease; */
  /* background-color: white; */
  padding-inline: 10px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0px;
  transform: translateY(-100%);
  opacity: 0;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
  /* transition: transform 0.7s ease, opacity 0.4s ease; */
  
  &.scroll {
    background-color: white;
    height: 70px;
    transform: translateY(0);
    opacity: 1;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  /* mobile / tablet screen */
  @media (max-width: 1024px) {
    position: fixed;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;

    &.scroll {
      height: 60px;
      background-color: white;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    }

    &.active {
      height: auto;
      opacity: 1;
      transform: translateY(0);
      background-color: white;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
      padding-bottom: 16px;
    }
  }
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const StyledMenuBar = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .cross-line {
      font-size: 30px;
    }
  }
`;

export const StyledNavbarContainer = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    li {
      list-style-type: none;
      padding: 10px 18px;
      border: none;
      border-radius: 20px;
      word-wrap: nowrap;
      transition: 0.4s ease-in-out;
      cursor: pointer;

      a {
        text-decoration: none;
        color: inherit;
      }
    }

    li:hover,
    li.active {
      color: white;
      background-color: #20b820;
    }

    .show-on-mobile {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    position: relative;
    width: 100%;
    top: auto;
    opacity: 0;
    height: 0;
    overflow: hidden;
    transform: none;
    transition: opacity 0.3s ease, height 0.3s ease;
    pointer-events: none;

    &.active {
      height: auto;
      overflow: visible;
      opacity: 1;
      pointer-events: auto;
      transition: opacity 0.3s ease;

      ul {
        flex-direction: column;
        margin-top: 16px;
        padding: 0;
        gap: 8px;

        .show-on-mobile {
          display: block;
        }
      }

      li {
        width: 220px;
        text-align: center;
      }
    }
  }

  /* @media (max-width: 1024px){
    li{
      text-wrap-mode: nowrap;
    }
  } */
`;

export const StyledProfileContainer = styled.div`
  position: relative;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const StyledRightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const StyledCartButton = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: background 0.2s;

  &:hover,
  &.active {
    background: rgba(32, 184, 32, 0.1);
    .cart-icon {
      color: #20b820;
    }
  }

  .cart-icon {
    font-size: 26px;
    color: #333;
    transition: color 0.2s;
  }

  .cart-badge {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 18px;
    height: 18px;
    background: #20b820;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }
`;

export const StyledUserProfile = styled.div`
  .profile-icon {
    font-size: 32px;
    cursor: pointer;
    color: #333;
    transition: color 0.2s;

    &:hover,
    &.active {
      color: #20b820;
    }
  }
`;

export const StyledProfileMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.25s ease, transform 0.25s ease;
  pointer-events: none;
  width: 180px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  border: 1px solid #e8eaed;
  overflow: hidden;
  &.active {
    opacity: 1;
    transform: translateY(0px);
    pointer-events: auto;
  }
`;

export const StyledProfileOption = styled.p`
  padding: 11px 14px;
  margin: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #f0f2f4;
  color: #333;
  cursor: pointer;
  transition: all 0.15s;

  &:hover,
  &.active {
    background: rgba(32, 184, 32, 0.08);
    color: #20b820;
  }

  &:last-child {
    border-bottom: none;
  }

  &.logout {
    color: #e53935;
    &:hover {
      background: rgba(229, 57, 53, 0.06);
      color: #e53935;
    }
  }

  span {
    font-size: 13px;
    font-weight: 600;
  }
  .profile-option-icon {
    font-size: 18px;
    flex-shrink: 0;
  }
`;
