import React from "react";

export default function Container({ children }) {
  return <div className="container mx-auto max-w-[1000px]"> {children}</div>;
}
