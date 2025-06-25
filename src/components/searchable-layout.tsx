import { ReactNode } from "react";

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <input type="text" placeholder="Search" />
      {children}
    </div>
  );
}
