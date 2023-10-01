// pages/login.tsx
"use client";
import { useEffect } from "react";
import Ps from "@/components/Ps";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
const Page = () => {
  return <Ps />;
};

export default Page;
