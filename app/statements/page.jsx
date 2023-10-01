// pages/login.tsx
"use client";
import { useEffect } from "react";
import Ps from "@/components/Ps";
// import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

const Page = () => {
    const { data: session, status } = useSession();
    if (!session) {
        redirect("/login");
    }

    return <Ps />;
};

export default Page;
