"use client";

import React from "react";
import SmoothScrollProvider from "./SmoothScrollProvider";

const ClientWrapper = ({ children }) => {
  return (
    <SmoothScrollProvider>
      {children}
    </SmoothScrollProvider>
  );
};

export default ClientWrapper;