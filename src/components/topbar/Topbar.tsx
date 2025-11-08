"use client";
import { StyledLogoContainer, StyledNavbarContainer, StyledProfileContainer, StyledProfileMenu, StyledProfileOption, StyledTopbarContainer, StyledUserProfile } from "./topbar.styled";
import logo from "../../../public/logo.svg"
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { useEffect, useState } from "react";
const Topbar=()=>{
    const [isProfileToggle, setIsProfileToggle] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    
    useEffect(()=>{
      const handleScroll=()=>{
        setIsScrolled(window.scrollY > 10);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    },[])
    return (
      <>
        <StyledTopbarContainer className={`${isScrolled ? 'scroll' : ''}`}>
          {/* logo */}
          <StyledLogoContainer>
            <Image src={logo} alt="website logo" />
          </StyledLogoContainer>

          {/* navbar */}
          <StyledNavbarContainer>
            <ul>
              <li>Home</li>
              <li>Browse Menu</li>
              <li>Special Offers</li>
              <li>Restaurants</li>
              <li>Track Orders</li>
            </ul>
          </StyledNavbarContainer>

          {/* profile manu */}
          <StyledProfileContainer>
            <StyledUserProfile>
              <CgProfile className="profile-icon" onClick={()=>setIsProfileToggle(!isProfileToggle)}/>
              <StyledProfileMenu className={`${isProfileToggle ? "active" : ""}`}>
                  <StyledProfileOption>
                    <CgProfile className="profile-option-icon"/>
                    <span>My Profile</span>
                  </StyledProfileOption>
                  <StyledProfileOption>
                    <IoMdLogOut className="profile-option-icon"/>
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