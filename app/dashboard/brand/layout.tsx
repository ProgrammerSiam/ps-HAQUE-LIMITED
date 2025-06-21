// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Brand Management",
//   description: "Manage your brands",
//   viewport: "width=device-width, initial-scale=1",
// };

// export default function BrandLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return <>{children}</>;
// }

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Management",
  description: "Manage your brands",
  viewport: "width=device-width, initial-scale=1",
};

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
