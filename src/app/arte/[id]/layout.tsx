import Link from "next/link";
import { Bottom } from "../../bottom";
import { useState } from "react";
import { Header } from "../../header";
import GPTHeader from "../../gptheader";

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

      <div>
        <Bottom currentPage={page} />
      </div>
    </section>
  );
}
