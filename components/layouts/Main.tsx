import React from "react";
import Header from "../Header";

type Props = {
  children?: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className={`min-h-screen mx-auto max-w-5xl flex flex-col w-full`}>
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6">
        {children}
      </main>
    </main>
  );
};

export default Layout;
