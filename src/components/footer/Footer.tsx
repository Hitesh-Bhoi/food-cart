"use client";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import location from "../../../public/icons/location.svg";
import headphone from "../../../public/icons/headphone.svg";
import email from "../../../public/icons/email.svg";
import clock from "../../../public/icons/clock.svg";
import {
  StyledAccountInfo,
  StyledAddressSection,
  StyledCompanyInfo,
  StyledContactSection,
  StyledCorporateInfo,
  StyledEmailSection,
  // StyledFollowusInfo,
  StyledFooterContainer,
  // StyledInstallAppInfo,
  // StyledLogoSection,
  StyledLogoWithInfo,
  // StyledPaymentsLink,
  // StyledPhoneInfo,
  StyledPopularProductInfo,
  // StyledRightsInfo,
  // StyledStoreLinks,
  // StyleFooterContactDetails,
  StyleFooterInfoDetails,
} from "./footer.styled";

require("./footer.styled");

const Footer = () => {
  return (
    <>
      <StyledFooterContainer>
        <StyleFooterInfoDetails>
          <StyledLogoWithInfo>
            <div>
              <Image src={logo} alt="website logo" />
            </div>
            <div className="footer-child-div">
            <StyledAddressSection>
              <Image src={location} alt="address icon" width={20} height={20} />
              <span>
                Address: Ahmedabad, Gujarat, India
              </span>
            </StyledAddressSection>
            <StyledContactSection>
              <Image
                src={headphone}
                alt="headphone icon"
                width={20}
                height={20}
              />
              <span>
                Call Us{" "}
                <span className="contact-number">(+91)-8200861893</span>
              </span>
            </StyledContactSection>
            </div>
            <div className="footer-child-div">
            <StyledEmailSection>
              <Image src={email} alt="email icon" width={20} height={20} />
              <p className="email-box">
                <span>Email</span> <span className="email">sales@ecobazar.com</span>
              </p>
            </StyledEmailSection>
            <StyledEmailSection>
              <Image src={clock} alt="clock icon" width={20} height={20} />
              <span>Hours 10:00 - 18:00, Mon - Sat</span>
            </StyledEmailSection>
            </div>
          </StyledLogoWithInfo>
          <StyledCompanyInfo>
            <p className="title">Company</p>
            <span>About Us</span>
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
            <span>Contact Us</span>
            <span>Support Center</span>
            <span>Careers</span>
          </StyledCompanyInfo>
          <StyledAccountInfo>
            <p className="title">Account</p>
            <span>Sign In</span>
            <span>View Chart</span>
            <span>My Wishlist</span>
            <span>Tract My Order</span>
            <span>Help Ticket</span>
            <span>Shipping Details</span>
            <span>Compare Products</span>
          </StyledAccountInfo>
          <StyledCorporateInfo>
            <p className="title">Corporate</p>
            <span>Become a Vendor</span>
            <span>Affiliate Program</span>
            <span>Farm Business</span>
            <span>Farm Careers</span>
            <span>Our Suppliers</span>
            <span>Accessibilitty</span>
            <span>Promotion</span>
          </StyledCorporateInfo>
          <StyledPopularProductInfo>
            <p className="title">Popular</p>
            <span>Fresh Fruits</span>
            <span>Seasonal Vegetables</span>
            <span>Organic Produce</span>
            <span>Exotic Fruits</span>
            <span>Leafy Greens</span>
            <span>Root Vegetables</span>
            <span>Herbs &amp; Garnishes</span>
          </StyledPopularProductInfo>
        </StyleFooterInfoDetails>

        {/* <StyleFooterContactDetails> */}
          {/* <StyledRightsInfo></StyledRightsInfo>
          <StyledPhoneInfo></StyledPhoneInfo>
          <StyledFollowusInfo></StyledFollowusInfo> */}
        {/* </StyleFooterContactDetails> */}
      </StyledFooterContainer>
    </>
  );
};
export default Footer;
