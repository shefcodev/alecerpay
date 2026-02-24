import { ReactNode } from "react";
import SidebarContextProvider from "@/sidebar-provider";
import StackLayout from "@/components/layout/StackLayout";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarContextProvider>
      <StackLayout>{children}</StackLayout>
    </SidebarContextProvider>
  );
};

export default layout;
