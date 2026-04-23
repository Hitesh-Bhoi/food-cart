"use client";

/**
 * Auth layout — renders children WITHOUT the Topbar / Footer.
 * Next.js route-groups like (auth) let us assign a different layout
 * to /login and /register without affecting the rest of the app.
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
