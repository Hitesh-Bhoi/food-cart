"use client";
import { FlexBox } from "@/styles/mixins";
import styled from "styled-components";

export const StyledFooterContainer = styled.div`
  ${FlexBox ({ direction: "column" })};
  padding: 20px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;
export const StyleFooterInfoDetails = styled.div`
  width: 100%;
  ${FlexBox ({ justify: "space-between", align: "flex-start" })}

  @media (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px 0;
  }

  @media ((min-width: 768px) and (max-width: 1023px)) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px 0;
  }
`;
export const StyledLogoWithInfo = styled.div`
  width: 25%;
  ${FlexBox ({ direction: "column", justify: "flex-start", align: "flex-start", gap: "15px" })};
  @media (max-width: 767px) {
    width: 100%;
    ${FlexBox ({ direction: "column", gap: "30px" })};
    padding-bottom: 20px;
  }

  @media ((min-width: 768px) and (max-width: 1023px)) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 20px;
  }
`;
export const StyledCompanyInfo = styled.div`
  width: auto;
  ${FlexBox ({ direction: "column", justify: "flex-start", align: "flex-start", gap: "15px" })};

  @media (max-width: 1023px) {
    width: 45%;
    align-items: center;
  }
`;
export const StyledAccountInfo = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;

  @media (max-width: 1023px) {
    width: 45%;
    align-items: center;
  }
`;
export const StyledCorporateInfo = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;

  @media (max-width: 1023px) {
    width: 45%;
    align-items: center;
  }
`;
export const StyledPopularProductInfo = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;

  @media (max-width: 1023px) {
    width: 45%;
    align-items: center;
  }
`;
export const StyledInstallAppInfo = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  @media ((min-width: 768px) and (max-width: 1023px)) {
    width: 70%;
  }
`;
export const StyledLogoSection = styled.div``;
export const StyledAddressSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media (max-width: 767px) {
    width: 50%;
    align-items: flex-start;
  }
`;
export const StyledContactSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  .contact-number {
    color: #20b820;
  }

  @media (max-width: 767px) {
    width: 50%;
    align-items: flex-start;
  }
`;
export const StyledEmailSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  .email {
    color: #20b820;
    word-wrap: wrap;
  }

  @media (max-width: 767px) {
    width: 50%;
    align-items: flex-start;
  }
`;
export const StyledStoreLinks = styled.div``;
export const StyledPaymentsLink = styled.div``;

export const StyleFooterContactDetails = styled.div``;
export const StyledRightsInfo = styled.div``;
export const StyledPhoneInfo = styled.div``;
export const StyledFollowusInfo = styled.div``;
