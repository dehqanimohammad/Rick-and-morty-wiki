"use client";

import Logo from "@/components/Logo";
import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <nav className="flex h-16 bg-slate-800 items-center px-7">
          <Logo />
        </nav>
        <main>{children}</main>
      </QueryClientProvider>
    </>
  );
}

export default layout;
