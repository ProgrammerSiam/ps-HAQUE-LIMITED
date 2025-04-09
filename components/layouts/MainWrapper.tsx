"use client";
import { usePathname } from "next/navigation";
import FloatingContactIcons from "@/components/FloatingContactIcons";

export default function MainWrapper({
  children,
  navbar,
  footer,
}: {
  children: React.ReactNode;
  navbar: React.ReactNode;
  footer: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && navbar}
      <main>{children}</main>
      {!isDashboard && (
        <>
          {footer}
          <FloatingContactIcons />
        </>
      )}
    </>
  );
}
