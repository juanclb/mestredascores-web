import Link from "next/link";
import { useState } from "react";
import GPTHeader from "../gptheader";
import { Bottom } from "../bottom";

const page = "Categorias";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <GPTHeader currentPage={page} />
        {/* <Header currentPage={page} /> */}
      </nav>

      {children}
    </section>
  );
}
