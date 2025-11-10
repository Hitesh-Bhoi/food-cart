"use client";
import styled from "styled-components";

export const StyledTopbarContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding-inline: 10px;
  position: sticky;
  top: 0;
  z-index: 999;
  transition: all 0.3s ease;

  &.scroll {
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    height: 70px;
  }

  /* mobile screen */
  @media (max-width: 1024px) {
    position: static;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    height: 40px;
    &.scroll {
        height: 40px;
      }
    &.active {
      height: 400px;
      &.scroll {
        height: 400px;
      }
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
    }

    li:hover {
      color: white;
      background-color: #20b820;
    }

    .show-on-mobile {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    top: -100px;
    transform: translateY(-100px);
    opacity: 0;
    transition: opacity 0.2s ease, transform 0.2s ease;
    pointer-events: none;

    &.active {
      left: 0;
      right: 0;
      top: 50px;
      width: 100%;
      transform: translateY(10px);
      opacity: 1;
      transition: opacity 0.3s ease, transform 0.3s ease;
      pointer-events: auto;

      ul {
        flex-direction: column;
        margin-top: 20px;
        padding: 0px;
        gap: 10px;

        .show-on-mobile {
          display: block;
        }
      }
      li {
        width: 200px;
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

export const StyledUserProfile = styled.div`
  .profile-icon {
    font-size: 38px;
    cursor: pointer;
  }
`;

export const StyledProfileMenu = styled.div`
  position: absolute;
  top: 45px;
  right: 0;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
  width: 140px;
  background-color: #20b820;
  border-radius: 8px;
  &.active {
    opacity: 1;
    transform: translateY(0px);
    pointer-events: auto;
  }
`;

export const StyledProfileOption = styled.p`
  padding: 8px 12px;
  margin: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  border-bottom: 1px solid white;
  color: white;
  cursor: pointer;
  span {
    font-size: 14px;
  }
  .profile-option-icon {
    font-size: 24px;
  }
`;
