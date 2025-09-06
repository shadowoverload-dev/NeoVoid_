"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutWrapper({
    children,
    session,
}: {
    children: React.ReactNode;
    session: unknown;
}) {
    const pathname = usePathname();

    const hiddenPaths = ["/login", "/register", "/auth/forgot-password"];

    const isHiddenPage = hiddenPaths.includes(pathname);


    return (
        <>
            {!isHiddenPage && <Navbar session={session} />}
            {children}
            {!isHiddenPage && <Footer />}
        </>
    );
}
