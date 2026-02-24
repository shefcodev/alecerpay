import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-full min-h-screen flex">
      <Navbar />
      <div className="flex-1">{children}</div>
    </section>
  );
};

export default layout;
