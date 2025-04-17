import { ReactNode } from "react";
import SchoolNavbar from "./SchoolNavbar";
import SchoolFooter from "./SchoolFooter";

interface SchoolLayoutProps {
  children: ReactNode;
}

const SchoolLayout = ({ children }: SchoolLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <SchoolNavbar />
      <main className="flex-grow">
        {children}
      </main>
      <SchoolFooter />
    </div>
  );
};

export default SchoolLayout;