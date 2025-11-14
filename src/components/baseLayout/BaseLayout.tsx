"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Topbar from "../topbar/Topbar";
import Footer from "../footer/Footer";
import Splash from "../splash/Splash";
import { useRouter } from "next/navigation";

const BaseLayout = ({ children }: any) => {
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const [showSplash, setShowSplash] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  /**
   * Make proper hook and return content order to avoid hydration issue
   * also check for the active browser extension like gramerly
   */
  // Mark hydration complete
  // Call the useEffect with [] first
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Determine if we should show splash (client-only)
  // After first useEffect call this useEffect will run
  useEffect(() => {
    if (!isHydrated) return;

    if (pathname === "/") {
      setShowSplash(true);
      const timer = setTimeout(() => {
        router.push("/dashboard");
      }, 8000);
      return () => clearTimeout(timer);
    } else {
      setShowSplash(false);
    }
  }, [isHydrated, pathname]);

  // After all useEffect calls run this conditionally return content
  if (!isHydrated) {
    return null; // safe because all hooks have run
  }

  if (showSplash) {
    return <Splash />;
  }

  return (
    <>
      <Topbar />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
