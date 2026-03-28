import React from "react";

interface BodyProps {
  children: React.ReactNode;
}

export function Body({ children }: BodyProps): React.ReactElement {
  return (
    <body className="h-screen w-screen bg-darkgreen">
      {children}
    </body>
  );
}