"use client";
import Hero from "@/components/Hero";
import Login from "@/components/Login";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between spacer layer1">
            <Hero showRegButton={false} />
            <Login router={router} />
        </main>
    );
}
