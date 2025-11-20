"use client";

import { useState } from "react";
import GymLoadingScreen from "./Loader";

export default function ClientLayout({ children }) {
  const [finished, setFinished] = useState(false);

  return (
    <>
      {!finished && <GymLoadingScreen onFinish={() => setFinished(true)} />}
      {finished && children}
    </>
  );
}
