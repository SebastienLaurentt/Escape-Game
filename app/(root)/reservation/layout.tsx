import Section from "@/components/shared/Section";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Section classname="flex flex-1 flex-col">
      {/* <Steps /> */}
      {children}
    </Section>
  );
};

export default Layout;
