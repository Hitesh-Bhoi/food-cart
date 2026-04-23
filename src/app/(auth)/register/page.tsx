"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.svg";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
  HiOutlineUser,
  HiOutlinePhone,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineClock,
} from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import {
  AuthPageWrapper,
  AuthBrandPanel,
  BrandContent,
  BrandFeatures,
  FeatureItem,
  AuthFormPanel,
  AuthFormContainer,
  AuthFormHeader,
  AuthForm,
  InputGroup,
  SubmitButton,
  Divider,
  SocialButtons,
  SocialButton,
  TermsText,
  AccountLink,
} from "../auth.styled";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle register logic
    console.log("Register:", formData);
  };

  return (
    <AuthPageWrapper>
      <AuthFormPanel>
        <AuthFormContainer>
          <AuthFormHeader>
            <Image src={logo} alt="Farmiva logo" className="form-logo" priority />
            <h2>Create your account</h2>
          </AuthFormHeader>

          <AuthForm onSubmit={handleSubmit}>
            {/* First + Last Name */}
            <InputGroup className="row">
              <div>
                <label htmlFor="register-first-name">First name</label>
                <div className="input-wrapper">
                  <input
                    id="register-first-name"
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    autoComplete="given-name"
                  />
                  <HiOutlineUser className="input-icon" style={{ pointerEvents: "none" }} />
                </div>
              </div>
              <div>
                <label htmlFor="register-last-name">Last name</label>
                <div className="input-wrapper">
                  <input
                    id="register-last-name"
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    autoComplete="family-name"
                  />
                  <HiOutlineUser className="input-icon" style={{ pointerEvents: "none" }} />
                </div>
              </div>
            </InputGroup>

            {/* Email */}
            <InputGroup>
              <label htmlFor="register-email">Email address</label>
              <div className="input-wrapper">
                <input
                  id="register-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
                <HiOutlineMail className="input-icon" style={{ pointerEvents: "none" }} />
              </div>
            </InputGroup>

            {/* Phone */}
            <InputGroup>
              <label htmlFor="register-phone">Phone number</label>
              <div className="input-wrapper">
                <input
                  id="register-phone"
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
                <HiOutlinePhone className="input-icon" style={{ pointerEvents: "none" }} />
              </div>
            </InputGroup>

            {/* Password */}
            <InputGroup>
              <label htmlFor="register-password">Password</label>
              <div className="input-wrapper">
                <input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  autoComplete="new-password"
                />
                <HiOutlineLockClosed className="input-icon" style={{ pointerEvents: "none" }} />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                </button>
              </div>
            </InputGroup>

            {/* Confirm Password */}
            <InputGroup>
              <label htmlFor="register-confirm-password">Confirm password</label>
              <div className="input-wrapper">
                <input
                  id="register-confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  autoComplete="new-password"
                />
                <HiOutlineLockClosed className="input-icon" style={{ pointerEvents: "none" }} />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                </button>
              </div>
            </InputGroup>

            {/* Already have an account */}
            <AccountLink>
              Already have an account?{" "}
              <Link href="/login">Sign in</Link>
            </AccountLink>

            {/* Submit */}
            <SubmitButton type="submit">Create Account</SubmitButton>

            {/* Divider */}
            <Divider>
              <span>or sign up with</span>
            </Divider>

            {/* Social Login */}
            <SocialButtons>
              <SocialButton type="button">
                <FcGoogle className="social-icon" />
                Google
              </SocialButton>
            </SocialButtons>

            {/* Terms */}
            <TermsText>
              By creating an account, you agree to our{" "}
              <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </TermsText>
          </AuthForm>
        </AuthFormContainer>
      </AuthFormPanel>
    </AuthPageWrapper>
  );
}
