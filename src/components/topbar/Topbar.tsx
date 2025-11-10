"use client";
import { StyledLogoContainer, StyledMenuBar, StyledNavbarContainer, StyledProfileContainer, StyledProfileMenu, StyledProfileOption, StyledTopbarContainer, StyledUserProfile } from "./topbar.styled";
import logo from "../../../public/logo.svg"
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { HiMiniBars3 } from "react-icons/hi2";

const Topbar=()=>{
    const [isProfileToggle, setIsProfileToggle] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isNavbarShow, setIsNavbarShow] = useState<boolean>(false);
    
    useEffect(()=>{
      const handleScroll=()=>{
        setIsScrolled(window.scrollY > 10);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    },[])
    return (
      <>
        <StyledTopbarContainer className={`${isScrolled ? "scroll" : ""} ${isNavbarShow ? "active" : ""}`}>
          {/* logo */}
          <StyledLogoContainer>
            <Image src={logo} alt="website logo" />
            <StyledMenuBar>
              {isNavbarShow ? (
                <RxCross1
                className="cross-line"
                onClick={() => setIsNavbarShow(false)}
                />
              ) : (
                <HiMiniBars3 className="cross-line" onClick={() => setIsNavbarShow(true)} />
              )}
            </StyledMenuBar>
          </StyledLogoContainer>

          {/* navbar */}
          <StyledNavbarContainer className={`${isNavbarShow ? "active" : ""}`}>
            <ul>
              <li>Home</li>
              <li>Browse Menu</li>
              <li>Special Offers</li>
              <li>Restaurants</li>
              <li>Track Orders</li>
              <li className="show-on-mobile">My Profile</li>
              <li className="show-on-mobile">Logout</li>
            </ul>
          </StyledNavbarContainer>

          {/* profile manu */}
          <StyledProfileContainer>
            <StyledUserProfile>
              <CgProfile
                className="profile-icon"
                onClick={() => setIsProfileToggle(!isProfileToggle)}
              />
              <StyledProfileMenu
                className={`${isProfileToggle ? "active" : ""}`}
              >
                <StyledProfileOption>
                  <CgProfile className="profile-option-icon" />
                  <span>My Profile</span>
                </StyledProfileOption>
                <StyledProfileOption>
                  <IoMdLogOut className="profile-option-icon" />
                  <span>Logout</span>
                </StyledProfileOption>
              </StyledProfileMenu>
            </StyledUserProfile>
          </StyledProfileContainer>
        </StyledTopbarContainer>
      </>
    );
}
export default Topbar;