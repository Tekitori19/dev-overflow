import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex items-center min-h-screen w-full justify-center">
      {children}
    </main>
  );
};

export default layout;
