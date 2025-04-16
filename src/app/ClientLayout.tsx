'use client';

import { useEffect } from "react";
import { preventGestures } from "@/utils/preventGestures";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    preventGestures();
  }, []);

  return <>{children}</>;
}