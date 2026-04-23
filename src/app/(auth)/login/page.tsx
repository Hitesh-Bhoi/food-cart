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
  FormOptions,
  SubmitButton,
  Divider,
  SocialButtons,
  SocialButton,
  AccountLink,
} from "../auth.styled";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log("Login:", { email, password, rememberMe });
  };

  return (
    <AuthPageWrapper>
      <AuthFormPanel>
        <AuthFormContainer>
          <AuthFormHeader>
            <Image src={logo} alt="Farmiva logo" className="form-logo" priority />
            <h2>Sign in to your account</h2>
          </AuthFormHeader>

          <AuthForm onSubmit={handleSubmit}>
            {/* Email */}
            <InputGroup>
              <label htmlFor="login-email">Email address</label>
              <div className="input-wrapper">
                <input
                  id="login-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
                <HiOutlineMail className="input-icon" style={{ pointerEvents: "none" }} />
              </div>
            </InputGroup>

            {/* Password */}
            <InputGroup>
              <label htmlFor="login-password">Password</label>
              <div className="input-wrapper">
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
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

            {/* Remember me + Forgot */}
            <FormOptions>
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>
              <Link href="/forgot-password" className="forgot-link">
                Forgot password?
              </Link>
            </FormOptions>

            {/* Don't have an account */}
            <AccountLink>
              Don&apos;t have an account?{" "}
              <Link href="/register">Create one free</Link>
            </AccountLink>

            {/* Submit */}
            <SubmitButton type="submit">Sign In</SubmitButton>

            {/* Divider */}
            <Divider>
              <span>or continue with</span>
            </Divider>

            {/* Social Login */}
            <SocialButtons>
              <SocialButton type="button">
                <FcGoogle className="social-icon" />
                Google
              </SocialButton>
            </SocialButtons>
          </AuthForm>
        </AuthFormContainer>
      </AuthFormPanel>
    </AuthPageWrapper>
  );
}
