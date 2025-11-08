"use client";
import styled from "styled-components";

export const StyledTopbarContainer = styled.div`
  background-color: aliceblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding-inline: 10px;
`;
export const StyledLogoContainer = styled.div``;

export const StyledNavbarContainer = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    li{
        list-style-type: none;
        padding: 10px 18px;
        border: none;
        border-radius: 20px;
        transition: 0.4s  ease-in-out;
    }

    li:hover {
        color: white;
        background-color: #20b820;
    }
  }
`;

export const StyledProfileContainer = styled.div`
  position: relative;
`;

export const StyledUserProfile = styled.div`
  .profile-icon{
    font-size: 38px;
    cursor: pointer;
  }
`

export const StyledProfileMenu = styled.div`
  position: absolute;
  top: 45px;
  right: 0;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.30s ease, transform 0.30s ease;
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
  span{
    font-size: 14px;
  }
  .profile-option-icon{
    font-size: 24px;
  }
`;