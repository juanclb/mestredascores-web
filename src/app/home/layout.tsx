import { Bottom } from "../bottom";
import GPTHeader from "../gptheader";

const page = "Início";

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
      </nav>

      {children}
    </section>
  );
}
