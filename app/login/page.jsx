"use client";
import Hero from "@/components/Hero";
import Login from "@/components/Login";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between spacer layer1">
      <Hero showRegButton={false} />
      <Login />
    </main>
  );
}
